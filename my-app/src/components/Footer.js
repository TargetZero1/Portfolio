import "./Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBtnTop, setShowBtnTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 500) {
        setShowBtnTop(true);
      } else {
        setShowBtnTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <footer className="text-center m-auto p-3 section">
        <span>&copy; 2023. All Right Reserved | Vijaypal Singh Brara</span>
      </footer>

      <div id="btn-top" className={showBtnTop ? "show" : ""} onClick={() => handleClick()}>
        <a href="#">
          <i className="bi bi-arrow-up-square-fill"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
