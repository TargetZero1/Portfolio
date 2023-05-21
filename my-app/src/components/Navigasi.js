import "../components/Navigasi.css";
import { useNavigate } from "react-router";

const Navigasi = () => {
  const Navigate = useNavigate();
  const isScrolling = () => {
    const headerEl = document.querySelector(".navbar");
    let windowPosition = window.scrollY > 100;
    headerEl.classList.toggle("active", windowPosition);
  };
  window.addEventListener("scroll", isScrolling);

  const navLink = document.querySelectorAll(".nav-link");
  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      const navBar = document.querySelector(".navbar-collapse");
      navBar.classList.remove("show");
    });
  });
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg fixed-top" data-bs-theme="dark">
        <div className="container nav-container">
          <a className="navbar-brand" href="https://vijaybrara.com">
            VIJAY BRARA
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-3 mt-lg-0 ms-auto">
              <a className="nav-link ms-lg-5" aria-current="page" onClick={() => Navigate("/")}>
                Home
              </a>
              <a className="nav-link ms-lg-5" onClick={() => Navigate("/Portfolio")}>
                Portfolio
              </a>
              <a className="nav-link ms-lg-5" onClick={() => Navigate("/About")}>
                About Me
              </a>
              <a className="nav-link ms-lg-5" onClick={() => Navigate("/Contact")}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigasi;
