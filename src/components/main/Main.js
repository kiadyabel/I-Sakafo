import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Posts from "../posts/Posts";
import RightBar from "../rightBar/RightBar";

const Main = () => {
  return (
    <Container>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={2}>
          <Posts />
        </Box>
        <Box flex={1} sx={{ xs: "none", md: "block" }}>
          <RightBar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Main;
