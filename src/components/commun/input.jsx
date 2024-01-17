import react, { Component } from "react";

class Input extends Component {
  state = {
    isFocused: false,
  };
  handleFocus = () => {
    this.setState({ isFocused: true });
  };
  handleBlur = () => {
    this.setState({ isFocused: false });
  };
  render() {
    const {
      value,
      name,
      label,
      type,
      onChange,
      helpMessage,
      required,
      validFeedback,
      invalidFeedback,
      className,
      autofocus,
    } = this.props;
    const helpDivId = name + "Help";
    return (
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          {label}
        </label>
        <input
          autoFocus={autofocus}
          aria-describedby={helpDivId}
          value={value}
          type={type}
          id={name}
          name={name}
          className={"form-control " + (this.state.isFocused ? className : "")}
          onChange={onChange}
          required={required}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {helpMessage &&
          this.state.isFocused &&
          !invalidFeedback &&
          !validFeedback && (
            <div id={helpDivId} className="form-text">
              {helpMessage}
            </div>
          )}
        {this.state.isFocused && (
          <div className="valid-feedback">{validFeedback}</div>
        )}
        {this.state.isFocused && (
          <div className="invalid-feedback">{invalidFeedback}</div>
        )}
      </div>
    );
  }
}

export default Input;
