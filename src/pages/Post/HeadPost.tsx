import Head from "next/head";
import { YoastProps } from "src/types/posts";

type Props = { seo: YoastProps };

const HeadPost = ({ seo }: Props) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="robots"
        content={`${seo.robots.index} ${seo.robots.follow}`}
      />
      <link rel="canonical" href={seo.canonical} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content={seo.og_locale} />
      <meta property="og:type" content={seo.og_type} />
      <meta property="og:title" content={seo.og_title} />
      <meta property="og:description" content={seo.og_description} />
      <meta property="og:url" content={seo.og_url} />
      <meta property="og:site_name" content={seo.og_site_name} />
      <meta property="article:publisher" content={seo.article_publisher} />
      <meta property="article:published_time" content={seo.published_time} />
      <meta property="og:image" content={seo.og_image[0].url} />
      <meta
        property="og:image:width"
        content={seo.og_image[0].width.toString() || ""}
      />
      <meta
        property="og:image:height"
        content={seo.og_image[0].height.toString()}
      />
      <meta property="og:image:type" content={seo.og_image[0].type} />
      <meta name="twitter:card" content={seo.twitter_card} />
      <meta name="twitter:creator" content={seo.twitter_creator} />
      <meta name="twitter:site" content={seo.twitter_site} />
    </Head>
  );
};

export default HeadPost;
