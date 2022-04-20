import Head from "next/head";
import React from "react";
import Layout from "src/layout";
import List from "src/components/List";
import { PostProps } from "src/types/posts";
import { MenuProps } from "src/types/menus";

type Props = {
  posts: PostProps[];
  totalPages: number;
  menuHeader: MenuProps;
  menuFooter: MenuProps;
};

const Home = ({ posts, menuHeader, menuFooter, totalPages }: Props) => {
  return (
    <Layout menuHeader={menuHeader} menuFooter={menuFooter}>
      <Head>
        <title>Canalapps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List posts={posts} totalPages={totalPages} />
    </Layout>
  );
};

export default Home;
