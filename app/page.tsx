import Header from './section/Header';
import Footer from './section/Footer';
import Rotate from './section/Rotate';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rotate PDF - Free Online PDF Rotation Tool</title>
        <meta
          name="description"
          content="Free online tool to rotate PDF pages. Rotate PDF pages individually or all at once. No upload needed - process files locally in your browser."
        />
        <meta
          name="keywords"
          content="rotate PDF, PDF rotation, free PDF tool, online PDF editor, browser PDF tool, local PDF processing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/rotate-pdf" />
        <meta
          property="og:title"
          content="Rotate PDF - Free Online PDF Rotation Tool"
        />
        <meta
          property="og:description"
          content="Free online tool to rotate PDF pages. Rotate PDF pages individually or all at once. No upload needed - process files locally in your browser."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/rotate-pdf" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/pdf-rotate-preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rotate PDF - Free Online PDF Rotation Tool"
        />
        <meta
          name="twitter:description"
          content="Free online tool to rotate PDF pages. Rotate PDF pages individually or all at once. No upload needed - process files locally in your browser."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <Rotate></Rotate>
        <Footer></Footer>
      </main>
    </>

  );
}
