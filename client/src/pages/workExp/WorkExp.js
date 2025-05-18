import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="6 months"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                GYL Digital Solution Pvt. Ltd
              </h4>
              <p>
              {/* Created and maintained front-end code for E-Commerce websites.
              Knowledge of responsive web design techniques to ensure the websites work well on various devices and Screen sizes.
               And Capability to debug and troubleshoot issues in web applications. */}
               During my internship, I developed and maintained full-stack web applications 
               using MongoDB, Express.js, React.js, and Node.js. I built RESTful APIs with Express
                and seamlessly integrated them with dynamic front-end components developed in React.
               In addition, I designed responsive user interfaces using React and Tailwind CSS,
                enhancing usability across various devices. I also implemented data models and 
                optimized queries in MongoDB to ensure efficient data handling.
                 Throughout the internship, I collaborated closely with senior developers
                 to implement new features, fix bugs, and ensure cross-browser compatibility, 
                 which helped me strengthen both my technical and teamwork abilities.
                 
              </p>
            </VerticalTimelineElement>

 <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="6 weeks"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                 IBM
              </h4>
              <p>
                 In this internship, I contributed to the development of responsive and user-friendly web interfaces,
                  working primarily with React to build and refine components that ensured seamless
                 functionality across devices and browsers. Throughout the internship,
                  I collaborated with designers and developers to translate UI/UX designs into clean,
                   maintainable code and participated in resolving front-end issues to
                   improve overall performance and usability.


             
              </p>
            </VerticalTimelineElement>


            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="1 month"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Oasis infobyte
              </h4>
              <p>
                  Utilized HTML, CSS and JavaScript to create responsive landing page for company.
                  And I have learned Frontened technology.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="1 month"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Let'sGrowMore
              </h4>
              <p>
              I have completed many projects during this internship such as Portfolio website.
              Optimized 20+ web pages for maximum speed and scalability.
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;