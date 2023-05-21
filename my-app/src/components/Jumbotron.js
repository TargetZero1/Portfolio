import "../components/Jumbotron.css";
import Avatar from "../img/vijay-avatar.png";

const Jumbotron = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row jumbotron d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="sayHi text-light">Hello, I'm</h6>
              <h2 className="myName text-light">Vijay Brara</h2>
              <h5 className="title text-light">
                Game Developer <span className="title-2">& UI/UX Designer</span>
              </h5>

              <div className="social-media d-flex gap-lg-5 gap-4">
                <a href="https://instagram.com/jay_xpal?igshid=ZDdkNTZiNTM=" target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/vijay.brara.1?mibextid=ZbWKwL" target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/vijaybrara-79280b257" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://talent.roblox.com/creators/322371551" target="_blank">
                  <i className="bi bi-box"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fotoProfile">
                <img src={Avatar} alt="profile" />
              </div>
            </div>
          </div>
          <div className="row go-down-wrapper">
            <div className="go-down text-center upDown">
              <i className="bi bi-chevron-double-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
