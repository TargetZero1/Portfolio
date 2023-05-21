import { useRef, useState } from "react";
import "./Form.css";

const Form = () => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbzTqa1ODzdNiD6XXdgoXC08yj-VwK2Re5WAtSAf-WEKeH5hyiOuWRmSCG_jqQApzjPqeA/exec";
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = formRef.current;
    const formData = new FormData(form);
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setIsLoading(false);
        setShowAlert(true);
        form.reset();
        // console.log("Success!", response);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error!", error.message);
      });
  };

  return (
    <>
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Thank You. </strong>We have received your message.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <form ref={formRef} name="contact-form-vijay-brara">
        <div className="input-form d-flex flex-column gap-2">
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your name" name="name" />
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email address" name="email" />

          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows="3" name="message" />
        </div>
        <button type="submit" className="btn btn-custom my-3 btn-send" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Loading...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <meta name="google-sheet-name" content="contact-form-vijay-brara" />
    </>
  );
};

export default Form;
