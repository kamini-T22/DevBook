import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "./button";
import Typography from "./typography";
import { Link } from "react-router-dom";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "primary",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#F0ECE5", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/?size=80&id=rIF0vbS1SG2w&format=png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Cultivate a network that enhances your access to valuable
                  resources and assistance.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/?size=80&id=KeS3y8UWKh2v&format=png"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Equip yourself with the necessary skills to thrive in your
                  pursuits.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/?size=80&id=111444&format=png"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Engage with articles that advocate and support collaborative
                  efforts in various fields.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button style={{ backgroundColor: '#31304D', color: 'white' }} >
       <Link to="/learning" style={{ color: '#F5F7F8' }}>Get started</Link>
      </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
