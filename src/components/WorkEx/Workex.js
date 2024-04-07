import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "./Cards";
import myntra from "../../Assets/myntra.png";
import bewakoof from "../../Assets/bewakoof.png";
import Sabudh from "../../Assets/sabudh.png";

function WorkEx() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies that I have worked with
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card
              isBlog={false}
              imgPath={myntra}
              title="Myntra"
              duration={"Mar'22 - Present"}
              description="Working with Myntra in their Front-end team. Worked on tasks like React native upgrade, Halfcard as a service platform, centralized app theming and more."
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={bewakoof}
              isBlog={false}
              title="Bewakoof"
              duration={"Nov'20 - Mar'22"}
              description="Was part of their front-end Web team. Responsible for projects like Product description page revamp, introduction of rating and review page, improving page loads among others."
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={Sabudh}
              isBlog={false}
              title="Sabudh Foundation"
              duration={"Jul'19 - Dec'19"}
              description="Was part of their data science team. Learned different ML algorithms, worked in Natural Language Processing, Image recognition and Recommender Systems.  Also worked on Computer Vision and Sentiment Analysis."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkEx;
