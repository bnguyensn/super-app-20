import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Invert binary tree</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="What is a binary tree and how to invert one"
        />
        <meta
          name="keywords"
          content="bnguyensn, binary tree, invert binary tree"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen px-2 overflow-x-hidden">{children}</main>
    </div>
  );
}
