import { Helmet } from "react-helmet";

const SITE_URL = "https://slaty.vercel.app";
const DEFAULT_DESCRIPTION =
  "Slaty connects learners with tutors for academic subjects and practical tech skills, helping them build knowledge, confidence, and career-ready skills.";

export default function SEO({
  title = "Slaty | Online Tutoring & Tech Skills Learning",
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/slatylogo.png",
  noindex = false,
  structuredData,
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Slaty" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Slaty online learning and tutoring platform" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
