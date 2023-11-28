// ExampleComponent.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import WhatSub_ScreenShot from "../../Assets/Projects/WhatSub_ScreenShot.png"
import Weather1 from "../../Assets/Projects/Weather1.png"
import Weather2 from "../../Assets/Projects/Weather2.png"
import Weather3 from "../../Assets/Projects/Weather3.png"
import AppDesign from "../../Assets/Projects/appdesign.png"

const imgStyle = {
  width: '100%', // Set the width to 100% for responsiveness
  height: 'auto', // Maintain aspect ratio
};

const weatherphotos = [Weather1, Weather2, Weather3];
function Weather() {
  return (
    <section>
       <Container fluid className="resume-section" style={{ backgroundColor: "white" }}>
       <h1 className="project-heading">
           <strong className="orange">Weather </strong>
        </h1>
          <Container>
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <div className="photo-container">
                  {weatherphotos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} className="photo" />
                 ))}
                </div>
            </Row>
            <Row>
            <p className="home-about-body">
             A Seamless Blend of OpenWeather API, Geocoding and CoreLocation for Real-time Weather Updates

              <br />
              <br />
              <i>
                <b className="orange">Technology

              </b>
              </i>
              <br />
              The app seamlessly integrates Swift and UIKit to craft a visually stunning and performance-driven iOS experience. Delegation and callbacks form a dynamic duo, ensuring smooth communication and an engaging user flow. The app's asynchronous design, embracing Async/Await, guarantees a seamless experience in fetching real-time weather data and transitioning between screens.
              <br />
              <br />
              <i>
                <b className="orange"> Two Screens: Cities List and City Details
              </b>
              </i>
              <br />
              The Cities List Screen features a search field for easy navigation and displays nearby cities when the search field is empty, updating dynamically with search terms. Tapping on a city smoothly transitions users to the "City Details" screen. Here, the current weather is highlighted at the top, accompanied by a 5-day and hourly forecast. 
              <br />
              <br />
              <i>
                <b className="orange"> Clean Architecture   

              </b>
              </i>
              <br />
             
              At the heart of WeatherFlow lies a clean and scalable architecture. Following industry-best practices, the app's architecture is meticulously crafted to enhance maintainability and scalability, providing a foundation for future enhancements and optimizations.
            </p>
            
        </Row>
          

           
             
          </Container>


        
      </Container>
    </section>
  );
}

export default Weather;
