import React from "react";
import inputsJson from "../data/inputsJson.json";
import Input from "./Input";
import GetAvatar from "./GetAvatar";

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfo = this.renderInfo.bind(this);
  }

  renderInfo() {
    return inputsJson.map((inputJson) => {
      return (
        <Input
          key={inputJson.id}
          inputJson={inputJson}
          handleChangeInput={this.props.handleChangeInput}
          handleReset={this.props.handleReset}
          value={this.props.data[inputJson.name]}
        />
      );
    });
  }

  render() {
    return (
      <form
        className="customize-menu__form  js-section"
        action=""
        method="post"
      >
        {this.renderInfo()}
        <p className="js__error-message-name js__hidden">Demasiado largo</p>
        <p className="js__error-message-job js__hidden">Demasiado largo</p>
        <GetAvatar
          updateAvatar={this.props.updateAvatar}
          data={this.props.data.photo}
        />
      </form>
    );
  }
}
export default Fill;
