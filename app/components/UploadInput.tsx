import { Upload } from 'lucide-react'
import React from 'react'

type UploadInputProps = {
  onSetFile: (file: File) => void
  onSetUrl: (url: string) => void
}

const UploadInput = ({ onSetFile, onSetUrl }: UploadInputProps) => {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      onSetFile(selectedFile)
      const fileUrl = URL.createObjectURL(selectedFile)
      onSetUrl(fileUrl)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      onSetFile(droppedFile)
      const fileUrl = URL.createObjectURL(droppedFile)
      onSetUrl(fileUrl)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      className="self-center flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-white cursor-pointer h-[350px] text-center w-[275px]"
      onClick={() => document.getElementById("pdf-upload")?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        id="pdf-upload"
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center justify-center ">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100">
          <Upload className="h-8 w-8 text-gray-500" />
        </div>
        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
      </div>
    </div>
  )
}

export default UploadInput