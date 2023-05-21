import "./CarouselDesc.css";
const CarouselDesc = (props) => {
  return (
    <>
      <h2 className="carousel-title">{props.title}</h2>
      <span className="carousel-job">{props.job}</span>
      <p className="carousel-desc">{props.desc}</p>
    </>
  );
};

export default CarouselDesc;
