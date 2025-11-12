import "./Footer.css";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { allSocialLinks } from "../../config/socialLinks";

const iconComponents = {
  github: FaGithubSquare,
  linkedin: FaLinkedin,
  facebook: FaFacebookSquare,
  twitter: FaTwitterSquare,
  instagram: FaInstagramSquare
};

const IconArea = () => {
  return (
    <p className="flex gap-md">
      {allSocialLinks.map((social) => {
        const IconComponent = iconComponents[social.platform];
        return (
          <span key={social.platform}>
            <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="transition hover-lift">
              <IconComponent size={20} />
            </a>{" "}
          </span>
        );
      })}
    </p>
  );
};

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content flex-col gap-lg">
        <p className="credit">
          Powered by{" "}
          <a
            href="https://sourcerer.io/jdsalisbury"
            target="_blank"
            rel="noreferrer"
            alt="Sourverer Account, Vissualization of github repo"
          >
            Jeff Salisbury
          </a>{" "}
        </p>
        <IconArea />
        <p className="copyright">Copyright © 2022</p>
      </div>
    </div>
  );
};
