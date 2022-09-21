import React, { useState } from "react";

import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  });

  const MenuBOx = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItems = [
    { name: "Accueil", link: "#" },
    { name: "Recettes", link: "#" },
    { name: "A propos", link: "#" },
    { name: "S'abonner", link: "#" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar color="default" position="sticky" elevation={4} sx={{mb:2}}>
      <StyledToolbar> 
        <Box flex={{ xs: 25, md: 1 }}>
          <Typography variant="h4" color="tomato">
            I-Sakafo
          </Typography>
        </Box>
        <MenuBOx flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography variant="body2">{item.name}</Typography>
          ))}
        </MenuBOx>
        <Box flex={1}>
          <TextField
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            color="warning"
            label="Recherche"
            variant="standard"
          />
          <MenuIcon
            sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Box>
      </StyledToolbar>
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
        <List>
        <TextField
            margin="10 px"
            color="warning"
            label="Recherche"
            variant="standard"
          />
          <ListItem
            variant="body2"
            sx={{ display: "flex", gap: 3, flexDirection: "column" }}
          >
            {MenuItems.map((item) => (
              <ListItemButton variant="body2">{item.name}</ListItemButton>
            ))}
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
