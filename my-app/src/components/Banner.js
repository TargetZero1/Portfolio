const Banner = (props) => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row banner">
            <div className="col mt-5">
              <span className="banner-title">{props.title}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
