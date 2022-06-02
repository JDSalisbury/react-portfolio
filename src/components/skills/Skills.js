import "./Skills.css";
import python from "./imgs/python.png";
import react from "./imgs/react.png";
import vue from "./imgs/vue.png";
import docker from "./imgs/docker.png";
import java from "./imgs/java.png";
import php from "./imgs/php.png";
import jenkins from "./imgs/jenkins.png";
import aws from "./imgs/aws.png";

export const Skills = () => {
  return (
    <div className="stats">
      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={python} className="png" />
        </div>
        <span></span>
        <progress max="100" value="85"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={react} className="png" />
        </div>
        <span></span>
        <progress max="100" value="75"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={vue} className="png" />
        </div>
        <span></span>
        <progress max="100" value="80"></progress>
      </div>

      <div className="stat">
        <div className="png-bg ">
          <img alt="Language logo" src={docker} className="png small-png" />
        </div>
        <span></span>
        <progress max="100" value="63"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={java} className="png" />
        </div>
        <span></span>
        <progress max="100" value="30"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={php} className="png" />
        </div>
        <span></span>
        <progress max="100" value="40"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={jenkins} className="png" />
        </div>
        <span></span>
        <progress max="100" value="55"></progress>
      </div>

      <div className="stat">
        <div className="png-bg">
          <img alt="Language logo" src={aws} className="png" />
        </div>
        <span></span>
        <progress max="100" value="50"></progress>
      </div>
    </div>
  );
};
