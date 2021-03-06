import { Typography } from "@mui/material";

type Props = {
  title: string;
  entradilla: string;
  authorName: string;
  published: string;
  updated: string;
};

const MetaInfoPost = ({
  title,
  entradilla,
  authorName,
  published,
  updated,
}: Props) => {
  return (
    <>
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color="text.secondary"
        mt={1}
        mb={2}
      >
        {entradilla}
      </Typography>
      <Typography variant="body2" mb={1} color="grey.500">
        {authorName} | Publicado: {published}
        {published !== updated && `|¬†Actualizado: ${updated}`}
      </Typography>
    </>
  );
};

export default MetaInfoPost;
