import Layout from "src/layout";
import List from "src/components/List";
import { PostProps } from "src/types/posts";
import { MenuProps } from "src/types/menus";

type Props = {
  posts: PostProps[];
  menuFooter: MenuProps;
  menuHeader: MenuProps;
  totalPages: number;
};

const Category = ({ posts, menuFooter, menuHeader, totalPages }: Props) => {
  return (
    <Layout menuFooter={menuFooter} menuHeader={menuHeader}>
      <List posts={posts} totalPages={totalPages} />
    </Layout>
  );
};

export default Category;
