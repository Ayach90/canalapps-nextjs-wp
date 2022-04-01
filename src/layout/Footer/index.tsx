import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "src/components/Logo";
import theme from "src/theme";
import { MenuProps } from "src/types/menus";
import FullWidth from "../FullWidth";
import { FooterWrapper, MenuFooterItem, MenuFooterList } from "./styles";

type Props = {
  menuFooter: MenuProps;
};

const Footer = ({ menuFooter }: Props) => {
  return (
    <footer style={{ overflow: "hidden" }}>
      <FullWidth
        borderTop={`1px solid ${theme.palette.primary.main}`}
        bgcolor="secondary.main"
        color="common.white"
      >
        <FooterWrapper container spacing={0}>
          <Grid item xs={12} md={4}>
            <Logo />
          </Grid>
          <Grid item xs={12} md={4} display="flex" flexDirection="column">
            <Typography variant="subtitle1" fontWeight="700">
              Sobre nosotros
            </Typography>
            <Typography>
              Canalapps es una web con noticias y reviews sobre las últimas apps
              y los dispositivos móviles más nuevos.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} display="flex" flexDirection="column">
            <Typography variant="subtitle1" fontWeight="700">
              Menu
            </Typography>
            <MenuFooterList>
              {menuFooter.items.map((item) => (
                <MenuFooterItem key={item.ID}>
                  <Link href={item.url} passHref>
                    <MuiLink>{item.title}</MuiLink>
                  </Link>
                </MenuFooterItem>
              ))}
            </MenuFooterList>
          </Grid>
        </FooterWrapper>
      </FullWidth>
      <Box bgcolor="grey.800" py={2} textAlign="center" color="common.white">
        @ Copyright {format(new Date(), "yyyy")} - CanalApps.com
      </Box>
    </footer>
  );
};

export default Footer;
