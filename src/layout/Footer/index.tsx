import { Grid } from "@mui/material";
import React from "react";
import { MenuProps } from "src/types/menus";
import FullWidth from "../FullWidth";
import { FooterWrapper } from "./styles";

type Props = {
  menuFooter: MenuProps;
};

const Footer = ({ menuFooter }: Props) => {
  console.log(menuFooter);
  return (
    <footer style={{ overflow: "hidden" }}>
      <FullWidth borderTop="1px solid red" bgcolor="#c5c5c5">
        <FooterWrapper container spacing={2}>
          <Grid item xs={12} md={4}>
            LOGO
          </Grid>
          <Grid item xs={12} md={4}>
            TEXT
          </Grid>
          <Grid item xs={12} md={4}>
            Menu
          </Grid>
        </FooterWrapper>
      </FullWidth>
    </footer>
  );
};

export default Footer;
