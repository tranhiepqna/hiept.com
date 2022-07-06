import Head from 'next/head';

export default function SEO({ title, description, url, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
