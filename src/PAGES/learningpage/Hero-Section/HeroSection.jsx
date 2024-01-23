import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../images/heroimg.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              Flexibility is key as you acquire knowledge at your convenience,<br></br> 
              adapting to a schedule that suits you, <br></br>anytime and anywhere!
              Learn at your own pace, wherever you are, 
              <br></br>with a schedule that fits seamlessly into your life—anytime, anywhere.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>
         <br></br><br></br>
          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
