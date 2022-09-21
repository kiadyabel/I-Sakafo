import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography, Stack } from "@mui/material";

import jus1 from "../../image/sa4.png";

const Category = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    border: "1px slolid",
    overflow: "hidden",

    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      height: 100,
      width: 100,
    },

    [theme.breakpoints.down("md")]: {
      height: 100,
      width: 100,
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
    color: "black",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      fontSize: 15,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  }));

  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius:"100%",
    marginTop:5,
    "&:hover": {
        opacity: 0.7,
        boxSizing: "borderBox",
        zIndex: 1,
        transition: "all 0.4s easy",
      },
  });



  return (
    <Stack Container direction={"row"} mt={1} spacing={4} ml={3} sx={{overflow:'auto'}}>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${jus1})` }} />
        <StyledTypography>salade</StyledTypography>
      </CardBox>
    </Stack>
  );
};

export default Category;
