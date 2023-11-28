import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ width: "250px", height: "250px" }} // Adjust the values as needed
/>
</div>
      <Card.Body>
        <Card.Title style={{ color: 'black' }}>{props.title}</Card.Title>
        <Card.Text style={{textAlign: "justify", color: 'black'}}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.isBlog ? <CgWebsite /> : <BsGithub />}
           &nbsp;
          {props.isBlog ? "Read more" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Read more"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
