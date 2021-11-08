import React, { useEffect, useState } from "react";
//
import sanityClient from "../client.js";
import "./Project.scss";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        language,
        description,
        projectImage{
          asset->{
            _id,
            url
          },
          alt
        },
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="container2">
      {/* <h2 className="hello">
        Hello, ianjojo here. Web dev, earl grey tea enthusiast, musician,
        prolific tinkerer. Looking for the intersections of all things. My
        skills include toasting hazelnuts to perfection, front-end and buncha
        stacks. My wife and my cat think I’m the most awesome.
      </h2> */}
      {/* <section className=""> */}
      <section className="project__container">
        {projectData &&
          projectData.map((project, index) => (
            <article className="project">
              <h3 className="project__title">
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="project__desc--container">
                <p className="project__desc">{project.description}</p>
              </div>

              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                className="text-red-500 font-bold hover:underline hover:text-red-400"
              >
                <div className="fill">
                  <img
                    className="project__img"
                    src={project.projectImage.asset.url}
                    alt=""
                  />
                </div>
              </a>
              <div className="project__tagbox">
                <h5 className="project__tag">{project.tags}</h5>
              </div>
            </article>
          ))}
      </section>
      {/* </section> */}
    </main>
  );
}
