import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "src/components/layout";
import Boxed from "src/components/layout/Boxed";
import { AuthorProps, PathsPostProps, PostProps } from "src/types/posts";

type Props = { post: PostProps[]; author: AuthorProps[] };

const Post = ({ post, author }: Props) => {
  const { title, content, fimg_url, date, yoast_head_json } = post[0];
  const { name: authorName } = author[0];
  return (
    <Layout>
      <Head>
        <title>{yoast_head_json.title}</title>
        <meta name="description" content={yoast_head_json.description} />
        <meta
          name="robots"
          content={`${yoast_head_json.robots.index} ${yoast_head_json.robots.follow}`}
        />
        <link rel="canonical" href={yoast_head_json.canonical} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content={yoast_head_json.og_locale} />
        <meta property="og:type" content={yoast_head_json.og_type} />
        <meta property="og:title" content={yoast_head_json.og_title} />
        <meta
          property="og:description"
          content={yoast_head_json.og_description}
        />
        <meta property="og:url" content={yoast_head_json.og_url} />
        <meta property="og:site_name" content={yoast_head_json.og_site_name} />
        <meta
          property="article:publisher"
          content={yoast_head_json.article_publisher}
        />
        <meta
          property="article:published_time"
          content={yoast_head_json.published_time}
        />
        <meta property="og:image" content={yoast_head_json.og_image[0].url} />
        <meta
          property="og:image:width"
          content={yoast_head_json.og_image[0].width.toString() || ""}
        />
        <meta
          property="og:image:height"
          content={yoast_head_json.og_image[0].height.toString()}
        />
        <meta
          property="og:image:type"
          content={yoast_head_json.og_image[0].type}
        />
        <meta name="twitter:card" content={yoast_head_json.twitter_card} />
        <meta
          name="twitter:creator"
          content={yoast_head_json.twitter_creator}
        />
        <meta name="twitter:site" content={yoast_head_json.twitter_site} />
      </Head>
      <Boxed>
        <Typography>{title.rendered}</Typography>
        <Typography>{date}</Typography>
        {authorName}
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Boxed>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }: any) {
  const splitSlug = params.slug.split("-");
  splitSlug.pop();
  const slug = splitSlug.join("-");
  const resPost = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = await resPost.json();
  const resAuthor = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/users?include=${post[0].author}`
  );
  const author = await resAuthor.json();
  return { props: { post, author } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(`https://www.canalapps.com/wp-json/wp/v2/posts`);
  const posts = await resPosts.json();

  const paths: PathsPostProps[] = [];
  posts.map(async (post: PostProps) => {
    paths.push({
      params: {
        slug: post.slug_id.toString(),
        category: post.main_category.slug.toString(),
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
}
