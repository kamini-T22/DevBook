import * as React from "react";
import Button from "./button";
import Typography from "./typography";
import ProductHeroLayout from "./Productherolayout";
import { Link } from "react-router-dom";
const backgroundImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#F0ECE5", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" >
        Upgrade your Knowledge
      </Typography>
      <Typography
        color="#F5F7F8"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Engage with articles that advocate and support collaborative efforts in various fields
      </Typography>
      <Button style={{ backgroundColor: '#31304D', color: 'white' }} >
       <Link to="/posts" style={{ color: '#F5F7F8' }}>Explore</Link>
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
