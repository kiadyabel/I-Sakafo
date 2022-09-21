import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Category from "../Category/Category";
import recette1 from "../../image/sa3.png";
import { DoubleArrow } from "@mui/icons-material";
import Suggetions from "../suggestions/Suggetions";

const Details = () => {
  return (
    <Container>
      <Category />
      <Typography variant="h4" align="center" mt={3}>
        Titre du recette
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={1}>
        Ces recettes peuvent contenir des liens d'affilation veuillez lire le
        contenues§
      </Typography>
      <Typography variant="body2" align="center" m={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "250px", width: "250px" }}
          component="img"
          image={recette1}
          alt="en attente"
        />
      </Box>
      <Typography variant="body2" align="center" color={"GrayText"} p={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography variant="h4" align="center" color={"GrayText"} p={1}>
        Ingredient
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrow />
          </ListItemIcon>
          <ListItemText primary="salade" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrow />
          </ListItemIcon>
          <ListItemText primary="vinaigre" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrow />
          </ListItemIcon>
          <ListItemText primary="huil d'olive" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrow />
          </ListItemIcon>
          <ListItemText primary="tomate" />
        </ListItemButton>
      </List>
      <Typography variant="body2" align="center" m={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Typography
        variant="h5"
        color="white"
        bgcolor="black"
        textAlign="center"
        mt={3}
      >
        Tu pourrais aussi aimer
      </Typography>
      <Suggetions />
    </Container>
  );
};

export default Details;
