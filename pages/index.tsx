import Layout from "src/layout";
import Head from "next/head";
import { PostProps } from "src/types/posts";
import List from "src/components/List";
import Home from "src/pages/Home";

type Props = {
  posts: PostProps[];
  totalPages: number;
};

const HomePage = ({ posts, totalPages }: Props) => {
  return <Home posts={posts} totalPages={totalPages} />;
};

export default HomePage;

export async function getStaticProps() {
  const resPosts = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?page=1`
  );
  const posts = await resPosts.json();

  const totalPages = resPosts.headers.get("x-wp-totalpages");
  return { props: { posts, totalPages }, revalidate: 600 };
}
