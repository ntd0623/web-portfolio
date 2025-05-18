import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import logo from "../../assets/logo-transparent.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col md="4" className="footer-copywright">
          <span>Aspiring Fullstack Developer</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ntd0623"
                style={{ color: "white", fontSize: "25px" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/thanhhdo.0623/"
                style={{ color: "white", fontSize: "25px" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
