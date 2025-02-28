import "./Work.css";

import { projects } from "../../Projects";
import { Link } from "react-router-dom";
import axios from "axios";

function Work() {
  let pathname = window.location.pathname.split("/");
  let current_view = pathname[pathname.length - 1];
  console.log(current_view);
  let currentList = [];
  console.log(pathname.length);

  currentList = projects.filter((project) => project.link !== current_view);
  let tag = pathname.length > 2;
  if (tag) {
    currentList = projects.filter((project) =>
      project.tags.includes(String(current_view))
    );
  }
  // let getRandomPokemonImage = () => {
  //   let randomPokemonId = Math.floor(Math.random() * 898) + 1;
  //   let pokeImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemonId}.png`;

  //   return pokeImageUrl;
  // };

  return (
    <div id="work-content">
      {tag && <h1 className="post-title tag-title">{current_view}</h1>}
      <div className="hfeed">
        {currentList &&
          currentList.map((project) => {
            return (
              <div className="proj_box">
                {/* <img className="spin_splat" src={getRandomPokemonImage()} /> */}
                <div key={project.link}>
                  <Link
                    to={{ pathname: "/projects/" + project.link }}
                    state={project}
                  >
                    <img
                      src={"/static/images/" + project.thumb}
                      alt={project.small_desc}
                      width="220"
                      height="150"
                      style={{ borderRadius: "15px" }}
                    />
                  </Link>
                  <h2 className="post-title entry-title">
                    <Link
                      to={{ pathname: "/projects/" + project.link }}
                      state={project}
                    >
                      {project.title}
                    </Link>
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Work;
