import { Breadcrumbs, BreadcrumbsProps, Link, Typography } from "@mui/material";
import { MainCategoryProps } from "src/types/posts";

type Props = BreadcrumbsProps & {
  category: MainCategoryProps;
  title: string;
};

const BreadcrumbsPost = ({ category, title, ...props }: Props) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      {...props}
      sx={{ ...(props.sx || {}) }}
    >
      <Link underline="hover" color="inherit" href="/">
        <Typography variant="body2">Inicio</Typography>
      </Link>
      <Link underline="hover" color="inherit" href={`/${category.slug}`}>
        <Typography variant="body2">{category.name}</Typography>
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbsPost;
