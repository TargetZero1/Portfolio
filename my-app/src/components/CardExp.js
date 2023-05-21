import "./CardExp.css";
const CardExp = (props) => {
  return (
    <>
      <div className="exp-wrapper text-light section w-100">
        <img src={props.img} alt="experience" className="img-fluid" />
        <h5 className="exp-title">{props.title}</h5>
        <h5 className="exp-job">{props.job}</h5>
        <span className="periode">{props.period}</span>
      </div>
    </>
  );
};

export default CardExp;
