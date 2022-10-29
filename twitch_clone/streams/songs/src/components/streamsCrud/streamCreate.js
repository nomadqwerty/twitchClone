import React from "react";

// Field component, reduxForm(like connect funct)
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  input = (formProp) => {
    // the field component, when called passes in an object into param(props obj)
    return (
      <div className="field">
        <label>{formProp.label}</label>
        <input {...formProp.input} />
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field name="title" component={this.input} label="enter Title">
            {" "}
          </Field>
          <Field
            name="description"
            component={this.input}
            label="enter description"
          >
            {" "}
          </Field>
          <button className="ui button">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  let errors = {};
  if (!formValues.title) {
    errors.title = "please enter a title";
  }
  if (!formValues.description) {
    errors.description = "please enter a description";
  }
  return errors;
};
export default reduxForm({ form: "streamCreate" })(StreamCreate);
