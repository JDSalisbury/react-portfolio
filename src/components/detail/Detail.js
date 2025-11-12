import { useLocation } from "react-router-dom";
import "./Detail.css";
import { Link } from "react-router-dom";

export const Detail = () => {
  const { state } = useLocation();
  const project = state;

  return (
    <div className="post-content">
      <img
        src={"/static/images/" + project.img}
        alt={project.title}
        className="single-thumbnail"
        loading="lazy"
      />
      <div className="post-aside">
        <h1 className="title entry-title">{project.title}</h1>

        <div className="byline small-desc">{project.small_desc}</div>

        <div className="byline">
          <strong>Repo:</strong>{" "}
          <a
            href={project.github}
            title="Github repo"
            target="_blank"
            rel="noreferrer"
          >
            {project.github}
          </a>
        </div>
        {project.website && project.website.link ? (
          <div className="byline">
            <strong>Site:</strong>{" "}
            <a
              href={project.website.link}
              title="Live site"
              target="_blank"
              rel="noreferrer"
            >
              {project.website.desc}
            </a>
          </div>
        ) : (
          ""
        )}

        <div className="byline">
          <strong>Tags:</strong>
          <div className="tag-container">
            {project.tags.map((tag, index) => (
              <Link
                key={index}
                to={{ pathname: "/projects/tag/" + tag }}
                className="tag-link"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="entry-content">
        <p>{project.larg_desc}</p>
      </div>
    </div>
  );
};
