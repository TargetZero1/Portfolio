import Banner from "./Banner";
import Form from "./Form";
import Svg from "../img/contact-svg.svg";
const ContactPage = () => {
  return (
    <>
      <Banner title="CONTACT" />
      <div className="container-fluid section">
        <div className="container">
          <div className="row">
            <div className="col pt-5 pb-3">
              <span className="section-title">Get in touch</span>
            </div>
          </div>
          <div className="row contact pb-5">
            <div className="col-lg-6">
              <Form />
            </div>
            <div className="col-lg-6">
              <div className="svg upDown">
                <img src={Svg} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row">
            <div className="col pt-5 pb-3">
              <span className="section-title">Follow Me</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-6">
              <div className="contact-socmed d-flex gap-5 py-3">
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
            <div className="col-lg-6 addr text-center d-flex align-items-center my-3">
              <div className="addr-item text-start text-light">
                <h6>Jawa Timur, Indonesia</h6>
                <span>+62 8820 0975 9102 | vijaybrara@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
