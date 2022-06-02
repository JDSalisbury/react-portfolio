import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const IconArea = () => {
  return (
    <p>
      <a href="https://github.com/JDSalisbury" target="_blank" rel="noreferrer">
        <FaGithubSquare size={20} />
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/jeffery-salisbury/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={20} />
      </a>{" "}
      <a
        href="https://www.facebook.com/jeffery.salisbury.7/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare size={20} />
      </a>{" "}
      <a href="https://twitter.com/JDSalsy" target="_blank" rel="noreferrer">
        <FaTwitterSquare size={20} />
      </a>{" "}
      <a
        href="https://www.instagram.com/jeffsalsy/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare size={20} />
      </a>
    </p>
  );
};

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
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
