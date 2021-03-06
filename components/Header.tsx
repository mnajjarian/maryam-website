import { Fragment } from "react";
import Navbar from "./Navbar";

const links = [
  { title: "home", href: "/" },
  { title: "about", href: "/about-me" },
  { title: "blog", href: "/blog" }
];
const Header = () => {
  return (
    <Fragment>
      <header>
        <div>
          <h1>
            <a href="/">maryam tavakkoli</a>
          </h1>
          <span>cloud engineer</span>
        </div>
      </header>
      <div className="nav__wrapper">
        <Navbar links={links} />
      </div>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 440px;
          background: var(--main-bg-color);
          background-image: url("../static/images/header2.jpeg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        header > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--main-dark-color);
        }
        h1 {
          margin: 0;
        }
        a {
          text-decoration: none;
          padding: 0;
          font: italic normal normal 45px/1.4em "times new roman", times, serif;
          font-weight: 600;
          text-transform: capitalize;
          color: var(--main-dark-color);
        }
        span {
          padding: 0;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav__wrapper {
            height: 0px;
          }
          header {
            height: 300px;
          }
          a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
