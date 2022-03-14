export type PostProps = {
  author: number;
  date: string;
  excerpt: { rendered: string };
  fimg_url: string;
  link: string;
  modified: string;
  slug: string;
  slug_id: string;
  main_category: {
    slug: string;
  };
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  categories: number[];
  id: number;
  yoast_head_json: {
    title: string;
    description: string;
    robots: { index: string; follow: string };

    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_publisher: string;
    published_time: string;
    og_image: {
      url: string;
      width: number;
      height: number;
      type: string;
    }[];
    twitter_card: string;
    twitter_creator: string;
    twitter_site: string;
  };
};

export type AuthorProps = {
  name: string;
};

export type PathsPostProps = {
  params: {
    slug: string;
    category: string;
  };
};
