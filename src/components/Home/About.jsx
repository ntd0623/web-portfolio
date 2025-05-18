import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Ngo Thanh Do </span> and
              I'm from <span className="yellow"> Binh Dinh, Viet Nam.</span>
              <br />
              <br />
              As a <b className="yellow">Web Developer Intern</b> with a strong
              interest in web development and a desire to gain real-world
              experience through practical project.
              <br />
              <br />I have a solid foundation in{" "}
              <b className="yellow">HTML, CSS, and JavaScript</b>, and as an
              intern, I have been actively learning and applying{" "}
              <b className="yellow">React</b> to build responsive and
              interactive user interfaces. On the back end, I am gaining
              hands-on experience with <b className="yellow">Node.js</b> and{" "}
              <b className="yellow">Laravel</b> for API development and basic
              database management.
              <br />
              <br />
              Currently, I am a second-year Information Technology student at
              Thu Duc College of Technology.
              <br />
              <br />
              As part of my self-learning journey, I have built a personal
              project — a{" "}
              <b className="yellow">medical appointment booking system</b> —
              user authentication and role-based access control, appointment
              scheduling, email notifications upon successful booking and doctor
              profile listings with availability. This project helped me
              understand the fundamentals of fullstack web development, system
              architecture, and real-world workflow in building user-centered
              applications.
              <br />
              <br />
              Additionally,{" "}
              <i>
                I am actively looking for opportunities to grow as a developer
                and contribute to real-world projects as a{" "}
                <b className="yellow">Web Developer Intern</b>.
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ntd0623"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thanhhdo.0623/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:thanhdo062305@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
