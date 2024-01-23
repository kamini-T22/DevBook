import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../images/ui-ux.png";
import courseImg2 from "../images/web-design.png";
import courseImg3 from "../images/web-development.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <br></br>
                <h2>Popular Courses</h2>
                <p>
                Discover a myriad of popular courses catering to diverse interests and subjects, drawing learners in with engaging content. 
                From trending topics to cutting-edge subjects, there's a course for everyone's curiosity and passion. 
                Explore and elevate your knowledge with the latest and most sought-after educational offerings.
                </p>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
