import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialValues = { name: "", Rating: "", comment: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [Submit, setSubmit] = useState(false);
  
  const Validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "name is required";
    }else if (values.name >  10) {
      errors.name = "name must be less 10 characters";
    }
    if (!values.Rating) {
      errors.Rating = "rating is required";
    }
    if (!values.comment) {
      errors.comment = "comment is required";
    }else if (values.comment > 20 ) {
      errors.comment = "comment must be less than 20 characters";
   }
    return errors;
  };


  const HandleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));   
    setSubmit(true);
  };

  const HandleChange = (e) => {
    // console.log(event.target)
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value  });
    console.log(formValues);

    
};
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && Submit) {
      console.log(formValues);
    }
  }, [formErrors,formValues,Submit]);


  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && Submit  ? (<div className="ui-message success" id = "signed"> Signed in successfully</div>) :(<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}
      
      <form onSubmit={HandleSubmit}>
        <h1>Form Validation</h1>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            <label for="Rating">Rating</label>

            <select
              name="Rating"
              id="Ratings"
              value={formValues.Rating}
              onChange={HandleChange}
            >
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐"> ⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐"> ⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className="field">
            <label>Your Name</label>
            <input
              type="text"name="name"placeholder="enter your name"value={formValues.name}onChange={HandleChange}/>
          </div>
          <p> {formErrors.name }</p>
          <div className="field">
            <label>Comment</label>
            <input
              type="text"
              name="comment"
              placeholder="comment"
              value={formValues.comment}
              onChange={HandleChange}  
            /><br></br>
            <p> { formErrors.comment }</p>

            <button type="submit" onClick={HandleSubmit}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
