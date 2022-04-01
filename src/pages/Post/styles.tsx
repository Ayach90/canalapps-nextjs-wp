import { Box, styled } from "@mui/material";
import theme from "src/theme";

export const ContentWrapper = styled(Box)(({ theme }) => ({
  a: { color: theme.palette.primary.main },
  ".gallery": {
    img: {
      width: "100%",
      height: "auto",
    },
  },
  iframe: { width: "100%", height: "auto" },
  p: { img: { maxWidth: "100%", height: "auto" } },
  figure: {
    img: { width: "100%", height: "auto" },
    width: "100% !important",
    margin: 0,
  },
}));
