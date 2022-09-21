import { Box, Grid, Typography } from "@mui/material";
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
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
        <Grid item xs>
          <PostCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Posts;
