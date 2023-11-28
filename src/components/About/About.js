import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ backgroundColor: "white" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "#0c0513"}}>
              Know Who <strong className="orange">I'M</strong>
            </h1>
            <Aboutcard />
        </Row>
        <h1 className="project-heading">
          Professional <strong className="orange">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
