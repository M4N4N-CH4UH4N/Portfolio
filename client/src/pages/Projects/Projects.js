import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import Ecommerceimage from '../../assests/images/E-commerce image.jpeg';
import geminiimage from '../../assests/images/gemini.png';
import portfolioimage from '../../assests/images/Portfolio image.png';
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        I am working on many frontend and backend technology and good knowlege of database. And I have work
        on many project like this-
          
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    // src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                     src={Ecommerceimage}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Material UI</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                 <span className="card-detail-badge">API</span>
                  <span className="card-detail-badge">Mongodb</span>
                     
            
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h4 className="text-uppercase">
                      {/* Social Media App (Memories) */}
                      E-commerce Website
                    </h4>
                    <p className="text-uppercase">
                      {/* I am create the App is called “Memories” and it is simple social media app that
                     allows users to post interesting  events that happened in their lives. */}
                     I developed a e-commerce website where users can browse products, apply filters,
                      add items to a cart, and place orders through an integrated payment gateway.
                        It includes features such as product listing, user registration and login, cart management, order placement,
                          and secure payment processing. 
                          {/* This project helped me understand the fundamentals
                           of full-stack web development and how different technologies work together to create
                           a functional and user-friendly web application. */}

                    </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/M4N4N-CH4UH4N/mern-e-commerce.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                        src={geminiimage}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                   <span className="card-detail-badge">JavaScript</span>

                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h4 className="text-uppercase">Generative AI App</h4>
                    <p  className="text-uppercase">
                   I developed a Generative AI application using the Google Gemini API.
                   By integrating the API with a user-friendly interface, the application
                    enables users to input prompts and receive dynamic, human-like text responses in real time. 
                    </p>

                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/M4N4N-CH4UH4N/Generative-AI-App.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">web App</span>
                  <img
                    // src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                       src={portfolioimage}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>

                  <span className="card-detail-badge">Express</span>
                  
                  <span className="card-detail-badge">Material UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h4 className="text-uppercase">Portfolio website</h4>
                    <p className="text-uppercase">
                    I designed and developed a personal portfolio website to showcase my skills,
                     projects, and professional experience. The website features a clean and responsive design,
                      ensuring a seamless user experience across devices.
                    </p>
                  </div>
                  <a className="ad-btn" href="https://github.com/M4N4N-CH4UH4N/Portfolio.git">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;