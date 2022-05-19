import getMenu from "src/helpers/getMenu";
import Post from "src/pages/Post";
import { MenuProps } from "src/types/menus";
import { AuthorProps, PathsPostProps, PostProps } from "src/types/posts";

type Props = {
  post: PostProps[];
  author: AuthorProps[];
  menuFooter: MenuProps;
  menuHeader: MenuProps;
};

const PostPage = ({ post, author, menuFooter, menuHeader }: Props) => {
  return (
    <Post
      post={post}
      author={author}
      menuFooter={menuFooter}
      menuHeader={menuHeader}
    />
  );
};

export default PostPage;

export async function getStaticProps({ params }: any) {
  const splitSlug = params.slug.split("-");
  splitSlug.pop();
  const slug = splitSlug.join("-");
  const resPost = await fetch(
    `https://admin-wp-back.canalapps.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = await resPost.json();
  const resAuthor = await fetch(
    `https://admin-wp-back.canalapps.com/wp-json/wp/v2/users?include=${post[0].author}`
  );
  const author = await resAuthor.json();

  const menuHeader = await getMenu("primary-menu-dispatch");
  const menuFooter = await getMenu("footer");
  return { props: { post, author, menuFooter, menuHeader } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(
    `https://admin-wp-back.canalapps.com/wp-json/wp/v2/posts`
  );
  const posts = await resPosts.json();

  const paths: PathsPostProps[] = [];
  posts.map(async (post: PostProps) => {
    paths.push({
      params: {
        slug: post.slug_id.toString(),
        category: post.main_category.slug.toString(),
      },
    });
  });
  return {
    paths,
    fallback: "blocking",
  };
}
