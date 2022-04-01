import { Box, Grid, Pagination, PaginationItem, Stack } from "@mui/material";
import { PostProps } from "src/types/posts";
import Boxed from "../../layout/Boxed";
import PostCard from "./PostCard";
import { useRouter } from "next/router";

type Props = { posts: PostProps[] };

const List = ({ posts }: Props) => {
  const router = useRouter();
  const pageSplit = router.asPath.split("page/");
  const page = parseInt(pageSplit[1]) || 1;
  return (
    <Boxed>
      <Grid container spacing={2}>
        {posts.map((post: PostProps) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </Grid>
      <Box display="flex" justifyContent="center" pt={3} pb={1}>
        <Pagination
          page={page}
          count={10}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              component="a"
              href={`${item.page === 1 ? "/" : `/page/${item.page}`}`}
              {...item}
            />
          )}
        />
      </Box>
    </Boxed>
  );
};

export default List;
