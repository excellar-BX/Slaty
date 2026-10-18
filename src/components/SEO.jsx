import { Helmet } from "react-helmet";

const SITE_URL = "https://slaty.vercel.app";

export default function SEO({ title, description, path = "/", noindex = false }) {
  const canonicalUrl = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="Slaty" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}/slatylogo.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/slatylogo.png`} />
    </Helmet>
  );
}
