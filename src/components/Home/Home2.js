import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/headshot.png";
// import myImg from "../../Assets/headshot.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "white" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I believe software empowers people to have a meaningful impact on the world. 
              <br />
              <br />Proficient in 
              <i>
                <b className="orange"> Swift and SwiftUI</b>
                , my expertise lies in crafting mobile applications with a commitment to clean code structure.
              </i>

              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="orange">Node.js</b> and
              <i>
                <b className="orange">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="orange"> React.js</b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wennieinnyc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wennie-wu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:fy.950719@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
