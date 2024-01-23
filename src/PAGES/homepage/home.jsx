//Home.jsx
import React from "react";
import ProductCategories from "./components/Productcate";
import ProductHero from "./components/Producthero";
import ProductHowItWorks from "./components/producthowitworks";
import ProductValues from "./components/productvalues";
import Header from "../navbar/Header";

function Home(){
  return(
    <>
    <div className="color">
    <Header/>
    <React.Fragment>
      <ProductHero/>
      <ProductValues/>
      <ProductCategories/>
      <ProductHowItWorks/>
    </React.Fragment>
    </div>
    </>
  );
}
export default Home;