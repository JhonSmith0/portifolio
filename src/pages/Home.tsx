import { Link } from "react-router-dom";
import { Link as ScrollableLink } from "react-scroll";
import { Header } from "../components/Header";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export function HomePage() {
  return (
    <>
      <Header />
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Olá, Meu nome é Nelson</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              Olá! Sou Nelson Rodrigues, também conhecido como Smith, um
              desenvolvedor full-stack altamente qualificado especializado em
              desenvolvimento front-end e back-end usando Typescript.
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="#projects" className="btn btn--bg">
              Projetos
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <Link
              to="https://linkedin.com/in/nelson-rodrigues-smith"
              className="home-hero__social-icon-link"
            >
              <img
                src="/png/linkedin-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </Link>
          </div>
          <div className="home-hero__social">
            <Link
              to="https://github.com/jhonsmith0"
              className="home-hero__social-icon-link"
            >
              <img
                src="/png/github-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </Link>
          </div>
          <div className="home-hero__social">
            <a href="#" className="home-hero__social-icon-link">
              <img
                src="/png/twitter-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="#" className="home-hero__social-icon-link">
              <img
                src="/png/yt-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="#"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="/png/insta-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse" />
        </div>
      </section>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Sobre mim</span>
            <span className="heading-sec__sub">
              Aqui você encontra algumas informações sobre quem eu sou e o que
              eu faço
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Quem sou eu</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  E aí, sou o Smith, Desenvolvedor fullstack. Já fiz vários
                  freelas e sou apaixonado por tecnologia e novos desafios.
                  Estou sempre buscando novas oportunidades e afiado nas últimas
                  tendências do mercado. Se você tá procurando um dev versátil e
                  sem medo de desafios eu sou o cara.
                </p>
              </div>
              <ScrollableLink
                to="contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contato
              </ScrollableLink>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">Minhas Habilidades</h3>
              <div className="skills">
                {skills.map((skill) => (
                  <div className="skills__skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projetos</span>
            <span className="heading-sec__sub">
              Aqui você encontrará alguns dos meus projetos, para ver mais
              acesse{" "}
              <a
                target="_blank"
                style={{
                  color: "#0062b9",
                }}
                href="https://github.com/jhonsmith0"
              >
                github.com/JhonSmith0
              </a>
            </span>
          </h2>
          <div className="projects__content">
            {projects.map((each) => (
              <div className="projects__row" key={each.id}>
                <div className="projects__row-img-cont">
                  <img
                    src={each.desktopPhoto}
                    alt={each.name}
                    className="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">{each.name}</h3>
                  <p className="projects__row-content-desc">
                    {each.introduction}
                  </p>
                  <Link
                    to={`/project/${each.id}`}
                    className="btn btn--med btn--theme dynamicBgClr"
                  >
                    Página do projeto
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">
              Contato
            </span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              Sinta-se à vontade para entrar em contato comigo enviando o
              formulário abaixo e eu irei voltar para você o mais rápido
              possível
            </span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">
                  Nome
                </label>
                <input
                  required
                  placeholder="Nome..."
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Email..."
                  type="text"
                  className="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  required
                  cols={30}
                  rows={10}
                  className="contact__form-input"
                  placeholder="Mensagem..."
                  name="message"
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
