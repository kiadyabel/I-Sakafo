import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <Box>
      <Typography variant="h5" align="center">
        Dernière Recettes
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        <Grid item xs>
          <PostCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostCard myDirection={"flex"} />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        color="white"
        bgcolor="black"
        mt={4}
        mb={4}
        textAlign="center"
      >
        Les plus populaires
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
        <Grid item sm={6} md={6}>
          <PostCard myDirection={"block"} />
        </Grid>
        <Grid item sm={6} md={6}>
          <PostCard myDirection={"block"} />
        </Grid>
        <Grid item sm={6} md={6}>
          <PostCard myDirection={"block"} />
        </Grid>
      </Grid>
      <Stack spacing={2} mt={3} mb={3} justifyContent="center"  alignItem="center">
      <Pagination count={10} color={"warning"} />
      </Stack>
    </Box>
  );
};

export default Posts;
