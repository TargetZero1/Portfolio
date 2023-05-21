import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="myCard w-100">
        <div className="myCard-inner">
          <div className="myCard-front bg-dark">
            <img src={props.img} alt="Gambar" />
            <h5 className="text-center pt-3">{props.title}</h5>
          </div>
          <div className="myCard-back p-3 text-center d-flex align-items-center">
            <div className="mx-auto">
              <h2 className={props.title}>{props.title}</h2>
              <span className="job text-muted">{props.job}</span>
              <span className="desc">{props.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
