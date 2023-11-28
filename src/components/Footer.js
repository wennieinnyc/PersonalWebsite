import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer"  style={{ backgroundColor: "white" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed and Developed by Soumyajit Behera</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FangYu Wu</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/wennieinnyc"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wennie-wu/"
                style={{ color: "black" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
