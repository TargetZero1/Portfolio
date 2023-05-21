import "./Button.css";
const Button = (props) => {
  return (
    <>
      <a href={props.link} target="_blank" className="btn button">
        <i className={props.icon}></i> {props.name}
      </a>
    </>
  );
};

export default Button;
