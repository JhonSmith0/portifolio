import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";
import { IProject } from "../interface";

export function ProjectPage() {
  const data = useLoaderData() as IProject;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Header onlyHomeLink />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{data.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{data.introduction}</p>
          </div>
          <div className="project-cs-hero__cta">
            {data.liveLink && (
              <Link to={data.liveLink} className="btn btn--bg" target="_blank">
                Preview
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={data.desktopPhoto}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Sobre</h3>
                {data.description.map((desc, i) => (
                  <p className="project-details__desc-para" key={i}>
                    {desc}
                  </p>
                ))}
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">
                  Tecnologias Utilizadas
                </h3>
                <div className="skills">
                  {data.tools.map((tool) => (
                    <div className="skills__skill" key={tool}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">Veja mais</h3>
                {data.liveLink && (
                  <Link
                    to={data.liveLink}
                    className="btn btn--med btn--theme project-details__links-btn"
                    target="_blank"
                  >
                    Preview
                  </Link>
                )}
                {data.githubLink && (
                  <Link
                    to={data.githubLink}
                    className="btn btn--med btn--theme-inv project-details__links-btn"
                    target="_blank"
                  >
                    Github
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
