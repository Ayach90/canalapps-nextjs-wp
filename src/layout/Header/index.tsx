import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { MenuProps } from "src/types/menus";
import Logo from "src/components/Logo";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

type Props = {
  menuHeader: MenuProps;
};

const Header = ({ menuHeader }: Props) => {
  const items = menuHeader.items;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  return (
    <AppBar position="static" sx={{ overflow: "hidden" }} color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {items.map((item) => (
                <Link key={item.ID} href={item.url} passHref>
                  <MenuItem>
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: "32px",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo width={150} height={35} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {items.map((item) => (
              <Button
                key={item.ID}
                onClick={() => router.push(item.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
