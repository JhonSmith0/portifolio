import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScrollable } from "react-scroll";

interface Props {
  onlyHomeLink?: boolean;
}

export function Header({ onlyHomeLink = false }: Props) {
  useEffect(() => {
    const hamMenuBtn = document.querySelector(
      ".header__main-ham-menu-cont"
    ) as any;
    const smallMenu = document.querySelector(".header__sm-menu") as any;
    const headerHamMenuBtn = document.querySelector(
      ".header__main-ham-menu"
    ) as any;
    const headerHamMenuCloseBtn = document.querySelector(
      ".header__main-ham-menu-close"
    ) as any;
    const headerSmallMenuLinks = document.querySelectorAll(
      ".header__sm-menu-link"
    ) as any;

    hamMenuBtn.addEventListener("click", () => {
      if (smallMenu.classList.contains("header__sm-menu--active")) {
        smallMenu.classList.remove("header__sm-menu--active");
      } else {
        smallMenu.classList.add("header__sm-menu--active");
      }
      if (headerHamMenuBtn.classList.contains("d-none")) {
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      } else {
        headerHamMenuBtn.classList.add("d-none");
        headerHamMenuCloseBtn.classList.remove("d-none");
      }
    });

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="/jpeg/photo.jpg"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Nelson Rodrigues</span>
        </Link>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/" className="header__link">
                Home
              </Link>
            </li>
            {onlyHomeLink || (
              <>
                <li className="header__link-wrapper">
                  <LinkScrollable to="about" className="header__link">
                    Sobre
                  </LinkScrollable>
                </li>
                <li className="header__link-wrapper">
                  <LinkScrollable to="projects" className="header__link">
                    Projetos
                  </LinkScrollable>
                </li>
                <li className="header__link-wrapper">
                  <LinkScrollable to="contact" className="header__link">
                    Contato
                  </LinkScrollable>
                </li>
              </>
            )}
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link to="/"> Home </Link>
            </li>
            {onlyHomeLink || (
              <>
                <li className="header__sm-menu-link">
                  <LinkScrollable to="about"> Sobre </LinkScrollable>
                </li>
                <li className="header__sm-menu-link">
                  <LinkScrollable to="projects"> Projetos </LinkScrollable>
                </li>
                <li className="header__sm-menu-link">
                  <LinkScrollable to="contact"> Contato </LinkScrollable>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
