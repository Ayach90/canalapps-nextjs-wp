import getMenu from "src/helpers/getMenu";
import Paginated from "src/pages/Paginated";
import { MenuProps } from "src/types/menus";
import { PostProps } from "src/types/posts";

type Props = {
  posts: PostProps[];
  menuHeader: MenuProps;
  menuFooter: MenuProps;
};

const PaginatedPage = ({ posts, menuHeader, menuFooter }: Props) => {
  return (
    <Paginated posts={posts} menuHeader={menuHeader} menuFooter={menuFooter} />
  );
};

export default PaginatedPage;

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?page=${params.page}&per_page=9`
  );
  const posts = await res.json();
  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");
  return { props: { posts, menuHeader, menuFooter } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?per_page=9`
  );
  const totalPages: number = +(resPosts.headers.get("x-wp-totalpages") || 1);
  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }
  return {
    paths,
    fallback: "blocking",
  };
}
