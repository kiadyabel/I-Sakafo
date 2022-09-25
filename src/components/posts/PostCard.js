import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";


const PostCard = ({ myDirection , title , excerpt , blogHref ,image }) => {
  return (
    <Box mt={3}>
      <Link
        href={blogHref}
        sx={{ textDecoration: "none" }}
      >
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="250"
              alt="en attent"
              image={image}
              sx={{
                width: "300px",
                cursor: "pointer",
                marginLeft: 3,
                "&:hover": {
                  opacity: 0.6,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{ mt: 6 }}>
              <Typography gutterBottom variant="h6" align="center">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {excerpt}
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} align="center">
                  Partager
                </Button>
                <Button sx={{ color: "tomato" }}>En Savoir Plus</Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostCard;
