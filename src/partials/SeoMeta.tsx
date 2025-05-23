"use client";

import config from "@/lib/config.json";
import { usePathname } from "next/navigation";

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;

  // Provide a default value for pathname if it's null
  const pathname = usePathname() ?? "";

  return (
    <>
      {/* title */}
      <title>
        {meta_title ? meta_title : title ? title : config.site.title}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={description ? description : meta_description}
      />

      {/* author from config */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={
          meta_title ? meta_title : title ? title : config.site.title
        }
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={description ? description : meta_description}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={
          meta_title ? meta_title : title ? title : config.site.title
        }
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={description ? description : meta_description}
      />

      {/* og-image */}
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
