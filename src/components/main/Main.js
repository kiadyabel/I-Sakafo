import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Hero from "../hero/Hero";
import Posts from "../posts/Posts";
import RightBar from "../rightBar/RightBar";

const Main = () => {
  return (
    <>
    <Hero />
      <Container>
        <Stack direction={"row"} spacing={1} mt={3}>
          <Box flex={2}>
            <Posts />
          </Box>
          <Box flex={1} display={{ xs: "none", md: "block" }}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Main;
