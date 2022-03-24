import Layout from "src/layout";
import Boxed from "src/layout/Boxed";
import BreadcrumbsPost from "src/pages/Post/BreadcrumbsPost";
import HeadPost from "src/pages/Post/HeadPost";
import Content from "src/pages/Post/Content";
import SocialPost from "src/pages/Post/SocialPost";
import { AuthorProps, PostProps } from "src/types/posts";
import { format } from "date-fns";
import MetaInfoPost from "src/pages/Post/MetaInfoPost";
import { MenuProps } from "src/types/menus";

type Props = {
  post: PostProps[];
  author: AuthorProps[];
  menuFooter: MenuProps;
  menuHeader: MenuProps;
};

const Post = ({ post, author, menuFooter, menuHeader }: Props) => {
  const {
    title,
    content,
    fimg_url,
    date,
    yoast_head_json,
    main_category,
    acf,
    modified,
    slug_id,
  } = post[0];
  const { name: authorName } = author[0];
  const published = format(new Date(date), "MM/dd/yyyy");
  const updated = format(new Date(modified), "MM/dd/yyyy");
  return (
    <Layout menuFooter={menuFooter} menuHeader={menuHeader}>
      <HeadPost seo={yoast_head_json} />
      <Boxed>
        <BreadcrumbsPost
          category={main_category}
          title={title.rendered}
          sx={{ marginBottom: 1 }}
        />
        <MetaInfoPost
          title={title.rendered}
          entradilla={acf.entradilla}
          authorName={authorName}
          published={published}
          updated={updated}
        />
        <SocialPost slug_id={slug_id} title={title.rendered} />
        <Content content={content.rendered} />
      </Boxed>
    </Layout>
  );
};

export default Post;
