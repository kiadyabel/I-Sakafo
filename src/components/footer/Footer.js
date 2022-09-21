import {styled, Box, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {

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
  return (
    <Box sx={{bgcolor:"tomato", height:"200px" }}>
      <Container>
        <Stack direction="row">
        <MenuBOx flex={1} sx={{ display: { xs: "none", md: "flex" } }} mt={1}>
          {MenuItems.map((item) => (
            <Typography variant="body2" color="white">{item.name}</Typography>
          ))}
        </MenuBOx>
        <Box flex={1} color={"white"} mt={1} >
          I-Sakafo Abel 2022
        </Box>
        </Stack>
        <Typography variant="h4" align="center" mt={8} color="white" >
            Mazotoa homana tompoko O!!!!!! 
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer