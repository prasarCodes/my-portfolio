import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../assets/database/experiences";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-4">
            <h2 className="text-center">Experience</h2>
            <VerticalTimeline lineColor="#fff">
              {experiences.map((exp) => (
                <VerticalTimelineElement
                key={exp.title}
                className="vertical-timeline-element"
                iconStyle={{ background: "#121212", color: "#fff" }}
                icon={exp.icon}
                date={exp.date}
              >
                <h3 style={{ color: "black" }}>{exp.title}</h3>
                <p style={{ color: "black" }}>{exp.desc}</p>
              </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
