import { Helmet } from "react-helmet";

const SITE_URL = "https://slaty.vercel.app";

const DEFAULT_DESCRIPTION =
  "Slaty helps students access tutoring, academic support, and engaging learning resources to make studying easier.";

export default function SEO({
  title = "Slaty | Online Tutoring and Academic Support",
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noindex = false,
  image = "/slatylogo.png",
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large"
        }
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Slaty" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:alt"
        content="Slaty educational platform"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
