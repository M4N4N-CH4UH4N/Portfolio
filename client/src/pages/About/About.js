import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import image from '../../assests/images/My_picture.png';
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
               {/* I'm a FullStack Developer and proficient in fundamental of
               front-end languages and server-side languages. And good 
               knowledge of MongoDB. I have completed 6 weeks internship
               as a frontend developer in IBM. And two internship completed
               with duration 1 month as a frontend developer. I have 
               Developed FullStack applications using latest industry-adopted
               technologies and frameworks. */}
               I'm Manan Chauhan, a Full Stack Developer with strong proficiency 
               in front-end technologies and server-side programming languages.
                I have solid working knowledge of MongoDB and experience building
                full-stack applications using modern, industry-adopted frameworks and tools.

                I have completed a 6-month internship as a Software Developer at 
                GYL Digital Solution Pvt. Ltd., where I gained hands-on experience in
                 full-stack development and contributed to real-world projects. 
                 Additionally, I completed a 6-week internship as a Front-End Developer 
                 at IBM, where I enhanced my skills in responsive web design and 
                 front-end development while working on industry-level applications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;