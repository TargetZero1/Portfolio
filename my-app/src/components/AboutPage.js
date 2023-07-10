import Banner from "./Banner";
import "./Banner.css";
import Avatar from "../img/vijay-avatar.png";
import CardExp from "./CardExp";
import Exp1 from "../img/exp/exp-1.png";
import Exp2 from "../img/exp/exp-2.png";
import Exp3 from "../img/exp/exp-3.png";
import Exp4 from "../img/exp/exp-4.png";
import Smk from "../img/smk.png";
import Py from "../img/py.png";
import C from "../img/c.png";
import Lua from "../img/lua.png";
import Unity from "../img/unity.png";
import Roblox from "../img/roblox.png";

const AboutPage = () => {
  return (
    <>
      <Banner title="ABOUT ME" />
      <div className="container-fluid section">
        <div className="container">
          <div className="row about py-5">
            <div className="col-md-3">
              <div className="profile-about">
                <img src={Avatar} alt="profile" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-9">
              <p className="about-desc text-light">
                As a second-year software engineering student, I have developed a passion for game production and programming. With 2 years of experience in scripting and development, I have honed my skills in delivering quality code that
                meets the highest standards. Throughout my journey, I have successfully delivered projects that have satisfied 8 customers.
              </p>
              <p className="about-desc-2 text-light">
                I am a detail-oriented individual who values optimal performance. With every project I undertake, I strive to optimize the code to enhance the user's experience, whether it's in a game or on a server. I take each project
                seriously and commit myself to delivering high-quality work, but I also enjoy the process of developing software.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row about pt-5 pb-3">
            <div className="col pt-5">
              <span className="section-title">EXPERIENCE</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 py-2">
              <CardExp img={Exp1} title="North Sea Games" job="Roblox Game Developer" period="March 2023 - Present" />
            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <CardExp img={Exp2} title="Roblox" job="Associate Programmer" period="August 2020 - Present" />
            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <CardExp img={Exp3} title="Feerik Games" job="Programmer" period="Dec 2022 - March 2023" />
            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <CardExp img={Exp4} title="Rapid Games Studio" job="Game Programmer" period="Aug 2022 - Nov 2022" />
            </div>
          </div>

          <div className="row about pt-5 pb-3">
            <div className="col pt-5">
              <span className="section-title">EDUCATION</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 mb-5 mt-2">
              <CardExp img={Smk} title="SMKN 1 Jenangan Ponorogo" job="Software Engineering" period="2021 - 2024" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light bg-dark">
        <div className="container">
          <div className="row about pt-5 pb-3">
            <div className="col pt-5">
              <span className="section-title">MY SKILLS</span>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col skill d-flex justify-content-lg-between justify-content-around flex-wrap pb-5">
              <img src={Unity} />
              <img src={Lua} />
              <img src={Py} />
              <img src={C} />
              <img src={Roblox} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
