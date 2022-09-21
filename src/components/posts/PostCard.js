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
import burger1 from "../../image/b3.png";

const PostCard = () => {
  return (
    <Box mt={3}>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Card>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component={"img"}
              height="300"
              alt="en attent"
              image={burger1}
              sx={{
                width: "300px",
                cursor: "pointer",
                marginLeft:3,
                "&:hover": {
                  opacity: 0.6,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{mt:6}}>
              <Typography gutterBottom variant="h6" align="center">
                gros Burger
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <CardActions >
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
