import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "./typography";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#F0ECE5" }}
    >
      <Container sx={{ mt: 5, mb: 3, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/?size=48&id=tjqY9GOlv1UU&format=png"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Connect
              </Typography>
              <Typography variant="h5">
                {
                  "Forge links with those possessing the ability to provide aid. Build relationships with individuals who hold the potential to offer valuable support and guidance."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/?size=80&id=105295&format=png"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  "Attain the essential skills required for reaching your goals. Invest time and effort in mastering the abilities crucial for success. Develop a proficiency in the key competencies that pave the way to achievement."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/?size=64&id=48485&format=png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Collaborative Efforts
              </Typography>
              <Typography variant="h5">
                {
                  "Explore articles that actively promote collaboration and teamwork. Immerse yourself in written content that fosters a cooperative mindset. Delve into literature that inspires and cultivates a sense of working together for shared goals."
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;