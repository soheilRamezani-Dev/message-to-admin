import "./form.css";

const Form = () => {
  return (
    <div className="form-container d-flex justify-content-center p-5 ">     
      <form onSubmit={''} className="form p-3 mt-5 bg-white rounded">
      <h2 className="text-center"></h2>
        <div className="mb-3">
          <lable>name:</lable>
          <input
            className="form-control"
            placeholder="enter your name"
            onChange={""}
            value=""
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <lable>email:</lable>
          <input
            className="form-control"
            placeholder="enter your email"
            onChange={""}
            value=""
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <lable>text:</lable>
          <textarea
            className="form-control"
            placeholder="enter your message"
            onChange={""}
            value=""
            type="text"
            name="name"
            id="name"
            rows="5"
          ></textarea>
        </div>
        <input className="btn btn-success mt-2 mb-2" type='submit' value='send' />
      </form>
    </div>
  );
};

export default Form;
