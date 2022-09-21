import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Box, Typography } from "@mui/material";

import burger1 from "../../image/m4.png";
import burger2 from "../../image/m3.png";
import burger3 from "../../image/m1.png";
import burger4 from "../../image/m5.png";
import Category from "../Category/Category";

const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      height: 250,
      maxWidth: 250,
    },

    [theme.breakpoints.down("md")]: {
      height: 250,
      maxWidth: 250,
    },

    "&:hover": {
      opacity: 0.7,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: "all 0.4s easy",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: "white",
    background: "tomato",

    maxWidth: 80,

    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      fontSize: 15,
      marginRight: 80,
      marginLeft: 80,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      marginRight: 50,
      marginLeft: 50,
    },
    "&:hover": {
      opacity: 0.7,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: "all 0.45s easy",
    },
  }));

  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger1})` }}></StyledCard>
          <StyledTypography>Menu 1</StyledTypography>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger2})` }}></StyledCard>
          <StyledTypography>Menu 2</StyledTypography>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger3})` }}></StyledCard>
          <StyledTypography>Menu 3</StyledTypography>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger4})` }}></StyledCard>
          <StyledTypography>Menu 4</StyledTypography>
        </Grid>
      </Grid>
      <Category />
    </Container>
  );
};

export default Hero;
