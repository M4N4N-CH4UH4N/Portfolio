import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import memoryimage from '../../assests/images/Memories image.png';
import newsimage from '../../assests/images/News image.jpg';
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
                     src={memoryimage}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Material UI</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h4 className="text-uppercase">
                      Social Media App (Memories)
                    </h4>
                    <p className="text-uppercase">
                      I am create the App is called “Memories” and it is simple social media app that
                     allows users to post interesting  events that happened in their lives.

                    </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/M4N4N-CH4UH4N/Project_Memories.git"
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
                        src={newsimage}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h4 className="text-uppercase">News Hub</h4>
                    <p  className="text-uppercase">
                    In this website fetching news using news API. 
                    And user easy-to-navigate menus and categories to help users find content quickly.
                    </p>

                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/M4N4N-CH4UH4N/News-Hub.git"
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
                    Create a responsive website named Portfolio.
                    I am show all relevant information for user in this website.
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