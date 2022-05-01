import getMenu from "src/helpers/getMenu";
import Paginated from "src/pages/Paginated";
import {
  CategoryProps,
  PathsCategoryPropsPaginated,
} from "src/types/categories";
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
  const resCat = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/categories?slug=${params.category}`
  );
  const category = await resCat.json();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?categories=${category[0].id}&page=${params.page}&per_page=9`
  );
  const posts = await res.json();
  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");
  const totalPages = res.headers.get("x-wp-totalpages");
  return { props: { posts, menuHeader, menuFooter, totalPages } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/categories`
  );
  const categories = await res.json();
  const paths: PathsCategoryPropsPaginated[] = [];

  categories.map(async (category: CategoryProps) => {
    const catRes = await fetch(
      `${process.env.NEXT_PUBLIC_URL_BACKEND}/wp-json/wp/v2/posts?categories=${category.id}&per_page=9`
    );
    const totalPages = Number(catRes.headers.get("x-wp-totalpages"));
    for (let page = 2; page <= totalPages; page++) {
      paths.push({
        params: { page: page.toString(), category: category.name },
      });
    }
  });
  return {
    paths,
    fallback: "blocking",
  };
}
