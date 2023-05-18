import colorSharp from "../assets/img/color-sharp.png";
import { BallCanvas } from "../canvas";
import { skills } from '../assets/database/skills';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="tw-flex tw-flex-row tw-flex-wrap tw-justify-center">
                {skills.map((skill) => (
                  <span key={skill.title}>
                    <BallCanvas icon={skill.icon} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  );
};
