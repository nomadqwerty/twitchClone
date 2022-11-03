import React from "react";

// Field component, reduxForm(like connect funct)
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStreamAction } from "../../actions";

class StreamCreate extends React.Component {
  renderError = (formProp) => {
    if (formProp.meta.touched) {
      if (formProp.meta.error) {
        return <p>{formProp.meta.error}</p>;
      }
      return;
    }
    return;
  };
  input = (formProp) => {
    // the field component, when called passes in an object into param(props obj)
    return (
      <div className="field error">
        <label>{formProp.label}</label>
        <input {...formProp.input} />

        {/* display error message only if user interacts with form */}
        <div>{this.renderError(formProp)}</div>
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    console.log(this.props.createStreamAction(formValues));
    // createStreamAction(formValues)
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

const formCompWrap = reduxForm({ form: "streamCreate", validate })(
  StreamCreate
);
export default connect(null, {
  createStreamAction,
})(formCompWrap);
