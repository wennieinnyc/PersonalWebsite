import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: 'black' }}>
            Hi Everyone, I am <span className="orange"> <b>Wennie (FangYu) Wu</b> </span>
            <br />
            <br />

            I graduated from <span className="purple"> <b>NYU</b> </span> with a Master of Science in Information Systems (MSIS) and have 3+ years of experience in mobile and web app development.             I've played a key role in delivering user-centric apps with high satisfaction and engagement by collaborating with cross-functional teams. 

            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
