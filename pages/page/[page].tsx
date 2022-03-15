import Paginated from "src/pages/Paginated";
import { PostProps } from "src/types/posts";

type Props = {
  posts: PostProps[];
};

const PaginatedPage = ({ posts }: Props) => {
  return <Paginated posts={posts} />;
};

export default PaginatedPage;

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?page=${params.page}`
  );
  const posts = await res.json();
  return { props: { posts } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(`https://www.canalapps.com/wp-json/wp/v2/posts`);
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
