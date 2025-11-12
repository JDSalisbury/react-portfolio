import "./Hero.css";
import jeff from "./colorado2.png";
import SocialIcon from "../common/SocialIcon";
import { primarySocialLinks } from "../../config/socialLinks";

function Hero() {
  return (
    <section className="hero-section">
      <div id="masthead">
        <div id="author-bio">
          <h1 className="bio-title">Jeff Salisbury</h1>
          <p className="bio-role">V.P. Software Engineer at JPMorganChase</p>
          <p className="bio-description">
            Self-driven software developer with excellent interpersonal skills and outstanding
            work ethic. Known as an extremely fast learner and capable engineer who excels at
            explaining complex technical concepts. Experienced in full-stack development across
            the entire software lifecycle—from frontend applications to backend business logic,
            database design, and DevOps CI/CD pipelines into AWS and cloud platforms. Proven
            track record of handling challenging projects and delivering efficient technological
            solutions.
          </p>
          <div className="hero-social-links flex gap-md">
            {primarySocialLinks.map((social, index) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                href={social.url}
                label={social.label}
                className={`social-button transition ${index === 1 ? 'social-button-primary' : ''}`}
                showLabel={true}
              />
            ))}
          </div>
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
