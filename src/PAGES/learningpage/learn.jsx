import React, { Fragment } from "react";

import HeroSection from "./Hero-Section/HeroSection";
import Courses from "./Courses-section/Courses";
import Features from "./Feature-section/Features";
import FreeCourse from "./Free-course-section/FreeCourse";
//import Testimonials from "./Testimonial/Testimonials";
import Header from "../navbar/Header";

const Learn = () => {
  return (
    <>
    <Header/>
    <Fragment>
      <HeroSection />
      <Courses />
      {/* <Testimonials/> */}
      <Features />
      <FreeCourse />
    </Fragment>
    </>
  );
};

export default Learn;
