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
    <main className="bg-gray-300 min-h-screen p-12">
      <section className="">
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
                <h3>{project.tags}</h3>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
