import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://linkedin.com/in/nelson-rodrigues-smith"
              >
                <img
                  className="main-footer__icon"
                  src="/png/linkedin-ico.png"
                  alt="icon"
                />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://github.com/jhonsmith0"
              >
                <img
                  className="main-footer__icon"
                  src="/png/github-ico.png"
                  alt="icon"
                />
              </Link>
              <Link target="_blank" rel="noreferrer" to="#">
                <img
                  className="main-footer__icon"
                  src="/png/twitter-ico.png"
                  alt="icon"
                />
              </Link>
              <Link target="_blank" rel="noreferrer" to="#">
                <img
                  className="main-footer__icon"
                  src="/png/yt-ico.png"
                  alt="icon"
                />
              </Link>
              <Link target="_blank" rel="noreferrer" to="#">
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="/png/insta-ico.png"
                  alt="icon"
                />
              </Link>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Nelson Rodrigues</h4>
            <p className="main-footer__short-desc">Fullstack Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
