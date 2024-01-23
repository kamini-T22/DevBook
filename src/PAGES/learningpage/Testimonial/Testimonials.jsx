
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from "../images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section">
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial-wrapper">
              <div className="testimonial-img">
                <img src={"https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Testimonial" width="500" height="30"className="img-fluid" />
              </div>

              <div className="testimonial-content">
                <h2 className="section-title">What Our Students Say</h2>

                <Slider {...settings} className="testimonial-slider">
                  {/* Testimonial 1 */}
                  <div>
                    <div className="single-testimonial">
                      <h6 className="testimonial-title">Excellent Course Materials</h6>
                      <p className="testimonial-text">
                      “As a bank, we have a commitment to ensure that we 
                      have the right skills and competencies to become a 
                      truly digital organization.”
                      </p>

                      <div className="student-info">
                        <h6 className="student-name">Helen Tippell</h6>
                        <p className="student-location">IB Technology Chief Architect and CTO, Deutsche Bank

</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div>
                    <div className="single-testimonial">
                      <h6 className="testimonial-title">Another Great Voice</h6>
                      <p className="testimonial-text">
                      “This really has changed the game, in terms of the way we view the delivery of technology 
                      and how we can work with our business users to try these 
                      ideas and then move forward.”
                      </p>

                      <div className="student-info">
                        <h6 className="student-name">Terry Learmouth</h6>
                        <p className="student-location">EMEA CIO, Nomura</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div>
                    <div className="single-testimonial">
                      <h6 className="testimonial-title">Amazing Learning Experience</h6>
                      <p className="testimonial-text">
                       
"We started streamlining so there’s more time for developers to actually focus on their task. 
The biggest surprise was the change in coding days—it jumped from 2.3 to 3 almost immediately.”
                      </p>

                      <div className="student-info">
                        <h6 className="student-name">Abesh Rajasekharan</h6>
                        <p className="student-location">Director of Technology, Thompson Reuters</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
