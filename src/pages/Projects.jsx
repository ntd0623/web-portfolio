import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import lift from "../assets/projects/lift.png";
import webfortfolio from "../assets/web-portfolio.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Booking Care"
              description="Booking Care is an online healthcare booking platform with a responsive React and Material-UI front-end, featuring a multilingual admin panel. Users can manage profiles and appointments with full CRUD, confirm or cancel bookings, and message healthcare providers.
The back-end uses Node.js with Express and MySQL for data management.
Booking Care delivers a smooth and secure booking experience for patients and clinics.
"
              ghLink="https://github.com/ntd0623/bookingcare-ReactJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webfortfolio}
              isBlog={false}
              title="Web Portfolio"
              description="This is my personal portfolio website built with ReactJS and Bootstrap, showcasing my skills, projects, and experience. The site features a clean, responsive design to provide an optimal user experience across devices. It highlights my journey as an IT student preparing for internship opportunities in web development."
              ghLink="https://github.com/ntd0623/web-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
