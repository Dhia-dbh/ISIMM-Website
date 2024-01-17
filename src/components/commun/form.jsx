import { Component } from "react";
import Joi from "joi-browser";
import Input from "../commun/input";
import Select from "../commun/select";

class Form extends Component {
  state = {
    isFirstAccess: true,
    data: {},
    errors: {},
  };
  handleChange = ({ currentTarget: targetInput }) => {
    this.setState({ isFirstAccess: false });
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const { name: key, value: input } = targetInput;
    //console.log(targetInput);
    const errorMessage = this.validateProperty(targetInput);
    data[key] = input;

    if (Object.keys(errorMessage) !== 0) errors[key] = errorMessage[key];
    else {
      delete errors[key];
      //console.log("errors deleted " + errors + key);
    }

    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isFirstAccess: false });
    const tempErrors = this.validateForm();
    const errors = tempErrors ? tempErrors : {};
    this.setState({ errors });

    this.form.current.className += " was-validated ";
    if (Object.keys(errors) === 0) return; // errors === {}

    this.doSubmit();
  };
  validateForm = (e) => {
    const { data } = this.state;
    const schema = this.schema;
    const errors = {};
    const options = { abortEarly: false };
    const { error: resultValidation } = Joi.validate(data, schema, options);
    if (!resultValidation) return null;
    resultValidation.details.map(({ message, path }) => {
      errors[path[0]] = message;
      return null;
    });
    return errors;
  };
  validateProperty = (targetInput) => {
    //targetInput is the currentTarget( the whole html element with it's all attributes)
    // Takes the property to check and the input of that property
    const { name, value: input } = targetInput;
    const inputToVerify = { [name]: input };
    const schema = { [name]: this.schema[name] };
    const { error: resultValidation } = Joi.validate(inputToVerify, schema);
    const error = {};
    if (resultValidation) error[name] = resultValidation.message;
    return error;
  };
  renderInput(name, label, type = "text", autofocus = false, ...rest) {
    const { data, errors, isFirstAccess } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        type={type}
        onChange={this.handleChange}
        className={
          !isFirstAccess ? (errors[name] ? "is-invalid" : "is-valid") : ""
        }
        required
        autofocus={autofocus}
        invalidFeedback={errors[name]}
        {...rest}
      />
    );
  }
  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderSelect = (
    items,
    label,
    value,
    id,
    displayAttribute,
    defaultValue = "new"
  ) => {
    if (defaultValue === "") defaultValue = "new";
    return (
      <Select
        items={items}
        label={label}
        name={label}
        value={value}
        id={id}
        displayAttribute={displayAttribute}
        onChange={this.handleChange}
        defaultValue={defaultValue}
      />
    );
  };
}

export default Form;
