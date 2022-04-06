import { PostProps } from "src/types/posts";
import Home from "src/pages/Home";
import { MenuProps } from "src/types/menus";
import getMenu from "src/helpers/getMenu";
import { URL_BACKEND } from "src/constants";

type Props = {
  posts: PostProps[];
  totalPages: number;
  menuHeader: MenuProps;
  menuFooter: MenuProps;
};

const HomePage = ({ posts, totalPages, menuHeader, menuFooter }: Props) => {
  return (
    <>
      <Home
        posts={posts}
        totalPages={totalPages}
        menuHeader={menuHeader}
        menuFooter={menuFooter}
      />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const resPosts = await fetch(
    `${URL_BACKEND}wp-json/wp/v2/posts?page=1&per_page=9`
  );
  const posts = await resPosts.json();

  const totalPages = resPosts.headers.get("x-wp-totalpages");

  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");

  return {
    props: { posts, totalPages, menuHeader, menuFooter },
    revalidate: 600,
  };
}
