import { Send } from "@mui/icons-material";
import { Box, Card, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import client1 from "../../image/abel.jpg";

const RightBar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" align="center" mt={3}>
        Salut je suis Abel
      </Typography>
      <CardMedia
        component={"img"}
        height="250"
        alt="en attent"
        image={client1}
        sx={{
          width: "300px",
          cursor: "pointer",
          marginLeft: 3,
          borderRadius: 10,
          "&:hover": {
            opacity: 0.6,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography variant="body2" align="center">
        J'aime chanter et cuisiner! mon meilleur moment passé de la table.
      </Typography>
      <Typography variant="body2" align="center">
        N'oublie pas de vous abonner I-Sakafo! <br />
        <a href="google.com">Lire Plus</a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 3 , textAlign:"center" , paddingTop:2}}>
        <Typography  variant="body">
          Annonce
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor={"tomato"} mt={5} >Abonnez-vous par E-mail</Typography>
      <Box sx={{pl:10 , display:"flex" , justifyContent:"center", alignItem:"center"}}>
        <TextField label="e-mail" variant="standard" color="warning"/>
        <IconButton>
            <Send sx={{color:"tomato"}}  />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 3 , textAlign:"center" , paddingTop:2}}>
        <Typography  variant="body">
          Annonce
        </Typography>
      </Card>
    </Box>
  );
};

export default RightBar;
