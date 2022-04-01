import { styled, Grid } from "@mui/material";

export const FooterWrapper = styled(Grid)(({ theme }) => ({
  ".MuiGrid-item": {
    display: "flex",
    justifyContent: "center",
    padding: "5px 15px",
    "&:not(:last-child)": {
      borderRight: `1px solid ${theme.palette.primary.main}`,

      [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
        borderRight: 0,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
}));

export const MenuFooterList = styled("ul")({
  margin: 0,
  padding: 0,
});

export const MenuFooterItem = styled("li")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});
