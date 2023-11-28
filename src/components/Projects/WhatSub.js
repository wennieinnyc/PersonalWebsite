// ExampleComponent.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import WhatSub_ScreenShot from "../../Assets/Projects/WhatSub_ScreenShot.png"
import Screen_1 from "../../Assets/Projects/screen_1.png"
import Screen_2 from "../../Assets/Projects/screen_2.png"
import Screen_3 from "../../Assets/Projects/screen_3.png"
import Screen_4 from "../../Assets/Projects/screen_4.png"
import Screen_5 from "../../Assets/Projects/screen_5.png"

const photos = [Screen_1,Screen_2,Screen_3,Screen_4,Screen_5];
function WhatSub() {
  return (
    <section>
       <Container fluid className="resume-section" style={{ backgroundColor: "white" }}>
       <h1 className="project-heading">
           <strong className="orange">WhatSub </strong>
        </h1>
          <Container>
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <div className="photo-container">
                  {photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} className="photo" />
                 ))}
                </div>
            </Row>

            <p className="home-about-body">
            In the fast-paced world of real estate, finding the perfect sublease can be challenging. Enter WhatSub, a groundbreaking iOS app that simplifies the subleasing process with a feature-rich platform designed for both tenants and property owners. 
              <br />
              <br />
              <i>
                <b className="orange"> Cutting-Edge Technology Stack</b>
                </i>
                <br />
                WhatSub is not just another subleasing app; it's a sophisticated solution crafted with precision. The app is built using Swift and SwiftUI, harnessing the power of Apple's latest programming language and declarative UI framework. The serverless Firebase backend ensures a robust and scalable infrastructure, providing users with a reliable and real-time experience.
              

              <br />
              <br />
              <i>
                <b className="orange">
                Clean Architecture & MVVM
                </b>
              </i>
              <br />
              WhatSub follows the Model-View-ViewModel (MVVM) architectural pattern, focusing on clean architecture for enhanced scalability and maintainability. This ensures that the app remains flexible and easy to evolve as user needs and technological advancements progress.
              <br />
              <br />
              <i>
              <b className="orange"> 

Seamless Property Management</b>
              </i>
             
              <br />
              What sets WhatSub apart is its comprehensive CRUD (Create, Read, Update, Delete) functionalities for property management. The ability to add, edit and delete listed apartments gives users full control over their listings.
              <br />
              <br />
              
              <i>
                <b className="orange">
                Real-Time Messaging
                </b>
              </i>
              <br />
              Communication is key in the world of subleasing, and WhatSub takes it to the next level with real-time messaging. Users can directly contact the individual who posted a listing, facilitating quick inquiries and streamlined communication.
              <br />
              <br />
              
              <i>
                <b className="orange"> User-Centric Features</b>
              </i>
              <br />
              WhatSub places user convenience at the forefront, incorporating features that elevate the overall experience. Easily navigate through apartment listings, fine-tune searches by neighborhood, and utilize filters for subway lines, building amenities, and in-unit features. Creating apartment listings, adding properties to a favorites list for swift access, and effortlessly managing profiles are all seamlessly integrated.

The app's clean and native UI, paired with optimized dependency management through Swift Package Manager, guarantees a smooth and efficient user interface. 
              <br />
              <br />
              <i>
                <b className="orange"> Optimization for Efficiency</b>
              </i>
              <br />

              To ensure optimal performance, WhatSub employs pagination and indexing to reduce database queries and optimize data retrieval processes. This means faster load times and a more responsive user interface, even when dealing with extensive property databases.
            </p>
          </Container>


        
      </Container>
    </section>
  );
}

export default WhatSub;
