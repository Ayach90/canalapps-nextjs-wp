import { Box, styled } from "@mui/material";

export const ContentWrapper = styled(Box)({
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
});
