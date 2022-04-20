import Head from "next/head";
import Layout from "src/layout";
import List from "src/components/List";
import { MenuProps } from "src/types/menus";
import { PostProps } from "src/types/posts";

type Props = {
  posts: PostProps[];
  menuHeader: MenuProps;
  menuFooter: MenuProps;
  totalPages: number;
};

const Paginated = ({ posts, menuFooter, menuHeader, totalPages }: Props) => {
  return (
    <Layout menuFooter={menuFooter} menuHeader={menuHeader}>
      <Head>
        <title>Canalapps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List posts={posts} totalPages={totalPages} />
    </Layout>
  );
};

export default Paginated;
