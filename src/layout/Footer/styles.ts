import { styled, Grid } from "@mui/material";

export const FooterWrapper = styled(Grid)(({ theme }) => ({
  ".MuiGrid-item": {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "16px",
    "&:not(:last-child)": {
      borderRight: "1px solid red",

      [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
        borderRight: 0,
        borderBottom: "1px solid red",
      },
    },
  },
}));
