import Layout from "src/components/layout";
import List from "src/components/List";
import { PostProps } from "src/types/posts";

type Props = { posts: PostProps[] };

const Category = ({ posts }: Props) => {
  return (
    <Layout>
      <List posts={posts} />
    </Layout>
  );
};

export default Category;
