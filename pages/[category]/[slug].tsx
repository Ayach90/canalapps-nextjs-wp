import Post from "src/pages/Post";
import { AuthorProps, PathsPostProps, PostProps } from "src/types/posts";

type Props = { post: PostProps[]; author: AuthorProps[] };

const PostPage = ({ post, author }: Props) => {
  return <Post post={post} author={author} />;
};

export default PostPage;

export async function getStaticProps({ params }: any) {
  const splitSlug = params.slug.split("-");
  splitSlug.pop();
  const slug = splitSlug.join("-");
  const resPost = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = await resPost.json();
  const resAuthor = await fetch(
    `https://www.canalapps.com/wp-json/wp/v2/users?include=${post[0].author}`
  );
  const author = await resAuthor.json();
  return { props: { post, author } };
}

export async function getStaticPaths() {
  const resPosts = await fetch(`https://www.canalapps.com/wp-json/wp/v2/posts`);
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
