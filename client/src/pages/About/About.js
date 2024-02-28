import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import image from '../../assests/images/My picture.jpeg';
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                src={image}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               I'm a FullStack Developer and proficient in fundamental of
               front-end languages and server-side languages. And good 
               knowledge of MongoDB. I have completed 6 weeks internship
               as a frontend developer in IBM. And two internship completed
               with duration 1 month as a frontend developer. I have 
               Developed FullStack applications using latest industry-adopted
               technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;