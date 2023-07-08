import Banner from "./Banner";
import Project1 from "../img/project/1.png";
import Project2 from "../img/project/2.png";
import Project3 from "../img/project/3.png";
import Project4 from "../img/project/4.png";
import Project5 from "../img/project/5.png";
import Project6 from "../img/project/6.png";
import Project7 from "../img/project/7.png";
import Project8 from "../img/project/8.png";
import G1 from "../img/gallery/g1.png";
import G2 from "../img/gallery/g2.png";
import G3 from "../img/gallery/g3.png";
import G4 from "../img/gallery/g4.png";
import G5 from "../img/gallery/g5.png";
import G6 from "../img/gallery/g6.png";
import G7 from "../img/gallery/g7.png";
import G8 from "../img/gallery/g8.png";
import G9 from "../img/gallery/g9.png";
import G10 from "../img/gallery/g10.png";
import G11 from "../img/gallery/g11.png";
import G12 from "../img/gallery/g12.png";
import G13 from "../img/gallery/g13.png";
import G14 from "../img/gallery/g14.png";

import Card from "./Card";

const PortfolioPage = () => {
  return (
    <>
      <Banner title="PORTFOLIO" />
      <div className="container-fluid section">
        <div className="container">
          <div className="row">
            <div className="col pt-5 pb-3">
              <span className="section-title">Studio Projects</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card img={Project1} title="Bouncing Blocks" job="Game Programmer & UI/UX Designer at North Sea Games" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3 ">
              <Card
                img={Project2}
                title="Bread Factory Tycoon"
                job="Game Programmer at North Sea Games "
                desc="Bread Factory Tycoon is a fun and addictive game where players run their very own bakery empire. From kneading dough to managing employees, players must make strategic decisions to grow their business and become a bread tycoon."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card
                img={Project3}
                title="Fast Food Simulator"
                job="Game Programmer at North Sea Games "
                desc="Fast Food Simulator lets players run their own Fast Food Restaurant, with a variety of food options and customizable settings. Test your management skills, serve customers, and make strategic decisions to grow your Fast Food Empire."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card
                img={Project4}
                title="Cut the Grass RP"
                job="Game Programmer at Rapid Games Studios"
                desc="Cut The Grass RP lets players experience the joys and challenges of lawn care by becoming a landscaper. Mow lawns, trim hedges, and maintain gardens to satisfy clients and build your business."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card
                img={Project5}
                title="Smash Islands"
                job="Game Programmer & UI/UX Designer at Rapid Games Studios"
                desc="In Smash Islands, Battle, Smash, and Destroy your way to victory with meme hammers, legendary abilities, and strategic gameplay. Earn points by knocking players off and capturing the Battle Raft Island to become the top player in this fast-paced and thrilling battle royale game."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row">
            <div className="col pt-5 pb-3">
              <span className="section-title">Personal Projects</span>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card
                img={Project6}
                title="Neon Clicker"
                job="Experimental Project"
                desc="Neon Clicker is an exciting and addictive game where players open cases to collect neon-themed items and boost their collection. With its vibrant neon graphics and easy-to-learn gameplay."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3 ">
              <Card
                img={Project7}
                title="Olympic Games Simulator"
                job="Themed Project for 2023 Olympic Games"
                desc="Olympic Games Simulator is a thrilling sports simulation game that puts players in the heart of the Olympic Games. With a variety of mini-games inspired by real Olympic events, players can compete in everything from track and field to swimming and hurdles."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <Card
                img={Project8}
                title="Hidden Hunter"
                job="Inspired by the game Murder Mystery"
                desc="Hidden Hunter is a thrilling social deduction game where players must identify the hunter among them before it's too late. With its engaging gameplay and mysterious atmosphere, Hidden Hunter is a great way to challenge your deductive skills and have fun with friends online."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row">
            <div className="col pt-5 pb-3">
              <span className="section-title">Gallery</span>
            </div>
          </div>

          <div className="row pb-5 d-flex justify-content-center gallery">
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G4} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G5} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G6} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G9} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G1} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G2} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G3} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G7} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G8} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G10} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G11} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G12} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G13} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-6 col-6 img-wrapper">
              <img src={G14} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
