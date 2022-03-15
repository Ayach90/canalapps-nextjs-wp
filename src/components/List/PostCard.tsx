import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link } from "@mui/material";
import { PostProps } from "src/types/posts";

type Props = {
  post: PostProps;
};

const PostCard = ({ post }: Props) => {
  const { id, title, excerpt, fimg_url, link } = post;
  const slug = link.split(".com/");
  return (
    <Grid item xs={12} md={4}>
      <Link href={`http://localhost:3000/${slug[1]}`} underline="none">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fimg_url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title.rendered}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default PostCard;
