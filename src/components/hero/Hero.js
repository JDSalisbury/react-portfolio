import "./Hero.css";
import jeff from "./colorado2.png";

function Hero() {
  return (
    <section className="hero-section">
      <div id="masthead">
        <div id="author-bio">
          <h1 className="bio-title">Jeff Salisbury</h1>
          <p className="bio-role">V.P. Software Engineer</p>
          <p className="bio-description">
            Excellent interpersonal skills, outstanding work ethic, and proof-based
            problem-solving capabilities. Recognized team player seeking to leverage
            knowledge to help companies become more efficient in their technological
            efforts. Capable of working anywhere in your workflow, from frontend
            applications to backend business logic, database design, and DevOps CI/CD
            pipelines into AWS or similar cloud platforms.
          </p>
        </div>
        <div id="header-banner" role="banner">
          <img
            id="img-jeff"
            src={jeff}
            alt="Jeff Salisbury"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
