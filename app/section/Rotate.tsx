'use client'
import { Button } from '@/components/ui/button'
import { Download, LoaderCircle, RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
import { PDFDocument, RotationTypes } from 'pdf-lib';
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import UploadInput from '../components/UploadInput';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type Rotations = Record<number, number>

const Rotate = () => {
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState<string>('')
  const [pages, setPages] = useState(0);
  const [pageRotations, setPageRotations] = useState<Rotations>({});
  const [pageScale, setPageScale] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)


  const rotatePage = (pageNumber: number, direction: string) => {
    setPageRotations(prev => {
      const currentRotation: number = prev![pageNumber] || 0;
      const newRotation = direction === 'clockwise'
        ? (currentRotation + 90) % 360
        : (currentRotation - 90 + 360) % 360;

      return {
        ...prev,
        [pageNumber]: newRotation
      };
    });
  };

  const rotateAllPages = (direction: string) => {
    const updatedRotations: Rotations = {};
    for (let i = 1; i <= pages; i++) {
      const currentRotation = pageRotations![i] || 0;
      updatedRotations[i] = direction === 'clockwise'
        ? (currentRotation + 90) % 360
        : (currentRotation - 90 + 360) % 360;
    }
    setPageRotations(updatedRotations);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPages(numPages);
    const initialRotations: Rotations = {};
    for (let i = 1; i <= numPages; i++) {
      initialRotations[i] = 0;
    }
    setPageRotations(initialRotations);
  };

  const handleDownload = async () => {
    if (url && file) {
      setIsProcessing(true);

      try {
        const fileArrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(fileArrayBuffer);
        const pages = pdfDoc.getPages();

        Object.entries(pageRotations).forEach(([pageNumber, rotation]) => {
          const pageIndex = parseInt(pageNumber) - 1;
          if (pageIndex >= 0 && pageIndex < pages.length) {
            const page = pages[pageIndex];

            const currentRotation = page.getRotation().angle || 0;
            const newRotation = (currentRotation + rotation) % 360;

            page.setRotation({
              angle: newRotation,
              type: RotationTypes.Degrees
            });
          }
        });

        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `new-${file.name}`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.log(error);
      } finally {
        setIsProcessing(false);
      }
    }
  }

  const handleReset = () => {
    setUrl('')
    setFile(null)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8f5ed] p-4">
      <div className="text-center container mx-auto py-20 space-y-5 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Rotate PDF Pages</h1>
        <p className="text-gray-600 mb-8">
          Simply click on a page to rotate it. You can then download your modified PDF.
        </p>

        {!url ? <UploadInput onSetFile={(file: File) => setFile(file)} onSetUrl={(url: string) => setUrl(url)} /> :
          (
            <div className="space-y-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => rotateAllPages('clockwise')}>Rotate all</Button>
                <Button onClick={handleReset}>Remove PDF</Button>
                <ZoomIn className="h-6 w-6 cursor-pointer" onClick={() => setPageScale(prevScale => prevScale + 0.2)}></ZoomIn>
                <ZoomOut className="h-6 w-6 cursor-pointer" onClick={() => setPageScale(prevScale => prevScale - 0.2)}></ZoomOut>
              </div>
              <div>
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="w-full grid grid-cols-5 gap-5"
                >
                  {pageRotations && Array.from(new Array(pages), (el, index) => (
                    <div key={`page_${index + 1}`} className="relative overflow-hidden">
                      <div className="absolute z-10 top-1 right-1 p-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full cursor-pointer"
                        onClick={() => rotatePage(index + 1, 'counterclockwise')}>
                        <RotateCw className="w-4 h-4" />
                      </div>
                      <div className="shadow-md p-3 bg-white hover:bg-gray-50 ">
                        <div className='relative h-full w-full flex flex-col justify-between items-center transition-transform origin-center'
                          style={{ transform: `rotate(${pageRotations[index + 1] || 0}deg)` }}>
                          <Page
                            pageNumber={index + 1}
                            rotate={pageRotations[index + 1] || 90}
                            width={250}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            scale={pageScale}
                          />
                        </div>
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </Document>
              </div>

              <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white">
                {isProcessing ? <LoaderCircle className="animate-spin" /> : <>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </>}
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Rotate