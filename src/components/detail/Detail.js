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
        alt="Typography"
        className="single-thumbnail"
      />
      <div className="post-aside">
        <h1 className="title entry-title">{project.title}</h1>

        <div className="byline small-desc">{project.small_desc}</div>

        <div className="byline">
          Repo:{" "}
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
            Site:{" "}
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
          Tags:{" "}
          {project.tags.map((tag) => {
            return (
              <>
                <Link to={{ pathname: "/projects/tag/" + tag }}>{tag}</Link>;{" "}
              </>
            );
          })}
        </div>
      </div>

      <div className="entry-content">
        <p>{project.larg_desc}</p>
      </div>
    </div>
  );
};
