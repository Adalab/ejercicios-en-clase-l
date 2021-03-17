import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.handleChangeInput({
      inputName: ev.currentTarget.name,
      inputValue: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <>
        <label
          className="customize-menu__form-label"
          htmlFor={this.props.inputJson.htmlFor}
        >
          {this.props.inputJson.labelText}
        </label>
        <input
          className={`customize-menu__form-input js-input ${this.props.inputJson.className}`}
          placeholder={this.props.inputJson.placeholder}
          type={this.props.inputJson.type}
          required
          id={this.props.inputJson.id}
          name={this.props.inputJson.name}
          onChange={this.handleChange}
          value={this.props.value}
        />
      </>
    );
  }
}

export default Input;
