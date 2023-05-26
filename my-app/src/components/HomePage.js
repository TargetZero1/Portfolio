import { useNavigate } from "react-router";
import Button from "./Button";
import Jumbotron from "./Jumbotron";
import Py from "../img/py.png";
import C from "../img/c.png";
import Lua from "../img/lua.png";
import Unity from "../img/unity.png";
import Roblox from "../img/roblox.png";
import Card from "./Card";
import Project1 from "../img/project/1.png";
import Project2 from "../img/project/2.png";
import Project3 from "../img/project/3.png";
import Project4 from "../img/project/4.png";
import Project5 from "../img/project/5.png";
import Project6 from "../img/project/6.png";
import Form from "./Form";

const HomePage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Jumbotron />
      <div className="container-fluid text-light section">
        <div className="container">
          <div className="row ">
            <div className="col pt-5 pb-3">
              <span className="section-title">INTRODUCTION</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-md-7 description">
              <p>
                Hi, my name is <strong>Vijaypal Singh Brara</strong>. I have developed a passion for game production and programming. With 2 years of experience in scripting and development, I have honed my skills in delivering quality code
                that meets the highest standards.
                <br />
                <br />I am a detail-oriented individual who values optimal performance. With every project I undertake, I strive to optimize the code to enhance the user's experience, whether it's in a game or on a server.
              </p>
            </div>
            <div className="col-md-5 description">
              <p>
                I take each project seriously and commit myself to delivering high-quality work, but I also enjoy the process of developing software. <br />
                If you would like to learn more about my experience and skills, please feel free to contact me.
              </p>
              <div className="btn-wrapper d-flex gap-3 py-3">
                <Button name="LinkedIn" icon="bi bi-linkedin" link="https://www.linkedin.com/in/vijaybrara-79280b257/" />
                <Button name="Send Mail" icon="bi bi-envelope-fill" link="mailto:vijaybrara@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col skill d-flex justify-content-around flex-wrap py-5">
                            <Skill image={Unity} alt="Unity" />
                            <Skill image={Lua} alt="Lua" />
                            <Skill image={Py} alt="Python" />
                            <Skill image={C} alt="C" />
                            <Skill image={Roblox} alt="Roblox" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-light section">
        <div className="container">
          <div className="row ">
            <div className="col pt-5 pb-3">
              <span className="section-title">PORTFOLIO</span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project1} title="Bouncing Blocks" job="Game Programmer & UI/UX Designer at North Sea Games" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3 ">
              <Card img={Project2} title="Bread Factory Tycoon" job="Game Programmer at North Sea Games " />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project3} title="Fast Food Simulator" job="Game Programmer at North Sea Games " />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project4} title="Cut the Grass RP" job="Game Programmer at Rapid Games Studios" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project5} title="Smash Islands" job="Game Programmer & UI/UX Designer at Rapid Games Studios" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project6} title="Neon Clicker" job="Experimental Project" />
            </div>
          </div>
          <div className="row">
            <div className="col mx-auto text-center more-project-button py-5" onClick={() => Navigate("/Portfolio")}>
              <Button name="More Project" icon="bi bi-grid-3x3-gap-fill" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row ">
            <div className="col pt-5 pb-3">
              <span className="section-title">CONTACT ME</span>
            </div>
          </div>

          <div className="row">
            <div className="col pb-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
