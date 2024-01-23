import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Access more expert-led courses.Cancel anytime, and the first month is free.Earn a certificate when you complete a course.Receive course recommendations tailored to you.Use project files and quizzes to practice while you learn.View courses anytime on your computer or phone",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.The way that you teach — what you bring to it — is up to you.We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our specialist certificate programs are designed to give you job-role training and formal workplace skills. In fewer than three hours of active learning, you can complete any of our curated certificate courses to cover a gap in your existing knowledge or gain clarity on a new subject area. So, in a single morning or one afternoon, you can super-charge your skills - all for free.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
