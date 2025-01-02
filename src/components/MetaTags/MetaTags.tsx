import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
}
const MetaTags: React.FC<MetaProps> = ({ title, description, image, url }) => {
  return (
    <Head>
      {/* Basic OG Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Optional Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My Website" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default MetaTags;
