import getMenu from "src/helpers/getMenu";
import Category from "src/pages/Category";
import { CategoryProps, PathsCategoryProps } from "src/types/categories";
import { MenuProps } from "src/types/menus";
import { PostProps } from "src/types/posts";

type Props = {
  posts: PostProps[];
  menuFooter: MenuProps;
  menuHeader: MenuProps;
};

const CategoryPage = ({ posts, menuHeader, menuFooter }: Props) => {
  return (
    <Category posts={posts} menuHeader={menuHeader} menuFooter={menuFooter} />
  );
};

export default CategoryPage;

export async function getStaticProps({ params }: any) {
  const resCat = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/categories?slug=${params.category}`
  );
  const category = await resCat.json();
  const res = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?categories=${category[0].id}`
  );
  const posts = await res.json();
  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");
  return { props: { posts, menuHeader, menuFooter } };
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
    fallback: "blocking",
  };
}
