import getMenu from "src/helpers/getMenu";
import Paginated from "src/pages/Paginated";
import { MenuProps } from "src/types/menus";
import { PostProps } from "src/types/posts";

type Props = {
  posts: PostProps[];
  menuHeader: MenuProps;
  menuFooter: MenuProps;
  totalPages: number;
};

const PaginatedCategoryPage = ({
  posts,
  menuHeader,
  menuFooter,
  totalPages,
}: Props) => {
  return (
    <Paginated
      posts={posts}
      menuHeader={menuHeader}
      menuFooter={menuFooter}
      totalPages={totalPages}
    />
  );
};

export default PaginatedCategoryPage;

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?page=${params.page}&per_page=9`
  );
  const posts = await res.json();
  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");
  const totalPages = res.headers.get("x-wp-totalpages");
  return { props: { posts, menuHeader, menuFooter, totalPages } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?per_page=9`
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
