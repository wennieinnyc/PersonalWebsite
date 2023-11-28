import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WhatSub from "../../Assets/Projects/WhatSub.png";
import Weather from "../../Assets/Projects/Weather.png";
import recipe from "../../Assets/Projects/Recipe.png"

function Projects() {
  return (
    <Container fluid className="project-section" style={{ backgroundColor: "white" }}>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WhatSub}
              isBlog={false}
              title="WhatSub"
              description="A subleasing iOS app supporting CRUD funtionalities for properties management and real-time messaging using SwiftUI, Firebase, and Swift Package Manager with an MVVM architectural pattern."
              ghLink="https://github.com/wennieinnyc/WhatSub"
              demoLink="/project/whatsub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={true}
              title="Weather"
              description="
              An iOS weather app integrates the OpenWeather API, utilizing UIKit, delegation, callbacks, publishers/subscribers, and Async/Await."
              ghLink="/project/weather"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe"
              description="
              An iOS app presents alphabetically sorted dessert recipes from a remote API. Users can unlock each recipe with a tap. Built with clean architecture and powered by Swift and SwiftUI."
              ghLink="https://github.com/wennieinnyc/Recipe"           
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
