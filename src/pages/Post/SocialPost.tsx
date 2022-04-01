import { Box, BoxProps, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

type Props = BoxProps & { title: string; slug_id: string };

const SocialPost = ({ title, slug_id, ...props }: Props) => {
  return (
    <Box {...props} sx={{ gap: 1, display: "flex", ...(props.sx || {}) }}>
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        sx={{ backgroundColor: "#25D366", color: "common.white" }}
        size="small"
        onClick={() =>
          window.open(
            `https://wa.me/?text=${title} http://localhost:3000/${slug_id}`
          )
        }
      >
        WhatsApp
      </Button>
      <Button
        variant="contained"
        startIcon={<TwitterIcon />}
        sx={{ backgroundColor: "#00ACEE", color: "common.white" }}
        size="small"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=http://localhost:3000/${slug_id}&text=${title}`
          )
        }
      >
        Twitter
      </Button>
      <Button
        variant="contained"
        startIcon={<FacebookIcon />}
        sx={{ backgroundColor: "#3B5998", color: "common.white" }}
        size="small"
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer.php?u=http://localhost:3000/${slug_id}`
          )
        }
      >
        Facebook
      </Button>
    </Box>
  );
};

export default SocialPost;
