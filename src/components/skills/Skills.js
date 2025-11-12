import "./Skills.css";
import python from "./imgs/python.png";
import react from "./imgs/react.png";
import vue from "./imgs/vue.png";
import docker from "./imgs/docker.png";
import java from "./imgs/java.png";
import php from "./imgs/php.png";
import jenkins from "./imgs/jenkins.png";
import aws from "./imgs/aws.png";

const skills = [
  { name: "Python", icon: python, level: 95, label: "Expert" },
  { name: "React", icon: react, level: 75, label: "Advanced" },
  { name: "Vue", icon: vue, level: 83, label: "Advanced" },
  { name: "Docker", icon: docker, level: 70, label: "Advanced", isSmall: true },
  { name: "Java", icon: java, level: 10, label: "Beginner" },
  { name: "PHP", icon: php, level: 15, label: "Beginner" },
  { name: "Jenkins", icon: jenkins, level: 25, label: "Intermediate" },
  { name: "AWS", icon: aws, level: 68, label: "Advanced" },
];

export const Skills = () => {
  return (
    <section className="stats-section">
      <div className="stats">
        <div className="stats-header">
          <h2 className="stats-title">Skills & Technologies</h2>
        </div>
        <div className="stats-grid">
        {skills.map((skill) => (
          <div className="stat" key={skill.name}>
            <div className="png-bg">
              <img
                alt={`${skill.name} logo`}
                src={skill.icon}
                className={skill.isSmall ? "png small-png" : "png"}
                loading="lazy"
              />
            </div>
            <div className="skill-info">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.label}</div>
              <div className="progress-wrapper">
                <progress max="100" value={skill.level}></progress>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
