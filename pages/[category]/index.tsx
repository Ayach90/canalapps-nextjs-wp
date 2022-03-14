import React from "react";
import Archive from "src/components/Archive";
import Layout from "src/components/layout";
import { CategoryProps, PathsCategoryProps } from "src/types/categories";
import { PostProps } from "src/types/posts";

type Props = { posts: PostProps[] };

const Category = ({ posts }: Props) => {
  return (
    <Layout>
      <Archive posts={posts} />
    </Layout>
  );
};

export default Category;

export async function getStaticProps({ params }: any) {
  const resCat = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/categories?slug=${params.category}`
  );
  const category = await resCat.json();
  const res = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?categories=${category[0].id}`
  );
  const posts = await res.json();
  return { props: { posts } };
}

export async function getStaticPaths() {
  const res = await fetch(`https://www.canalapps.com/wp-json/wp/v2/categories`);
  const categories = await res.json();
  const paths: PathsCategoryProps[] = [];
  categories.map((category: CategoryProps) => {
    paths.push({ params: { category: category.slug.toString() } });
  });

  return {
    paths,
    fallback: false,
  };
}
