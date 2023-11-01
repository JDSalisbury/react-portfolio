import "./Hero.css";
import jeff from "./colorado2.png";

function Hero() {
  return (
    <div id="masthead">
      <div id="author-bio">
        V.P. Software Engineer, with excellent interpersonal skills, outstanding
        work ethic, and proof-based problem-solving capabilities. Recognized
        team player seeking to leverage knowledge to help companies become more
        efficient in their technological efforts. Capable of working anywhere in
        your workflow, from FrontEnd applications, to Backend buisness logic, DB
        Design, and Devops CI/CD piplines into AWS or similar cloud platforms. I
        once had a car catch fire while driving it.
      </div>
      <div id="header-banner" role="banner">
        <img
          id="img-jeff"
          src={jeff}
          alt=""
          style={{ height: "auto", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Hero;
