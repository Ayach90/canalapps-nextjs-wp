import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import useGetCategoryName from "src/hooks/useGetCategoryName";
import { PostProps } from "src/types/posts";
import Boxed from "./layout/Boxed";
import PostCard from "./PostCard";

type Props = { posts: PostProps[] };

const Archive = ({ posts }: Props) => {
  return (
    <Boxed>
      <Grid container spacing={2}>
        {posts.map((post: PostProps) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </Grid>
    </Boxed>
  );
};

export default Archive;
