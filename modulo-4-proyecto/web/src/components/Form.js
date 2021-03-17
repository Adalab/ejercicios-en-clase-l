import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import "../stylesheets/pages/_main.scss";
import Collapsable from "./Collapsable";
import designIcon from "../images/design.svg";
import keyboardIcon from "../images/keyboard.svg";
import shareIcon from "../images/share.svg";

class Form extends React.Component {
  render() {
    return (
      <nav className="gen-main__customize">
        <Collapsable title="Diseña" icon={designIcon}>
          <Design
            handleChangePalette={this.props.handleChangePalette}
            palette={this.props.data.palette}
            handleReset={this.props.handleReset}
          />
        </Collapsable>
        <Collapsable title="Rellena" icon={keyboardIcon}>
          <Fill
            inputsJson={this.props.inputsJson}
            handleChangeInput={this.props.handleChangeInput}
            data={this.props.data}
            updateAvatar={this.props.updateAvatar}
            handleReset={this.props.handleReset}
          />
        </Collapsable>
        <Collapsable title="Comparte" icon={shareIcon}>
          <Share sendRequest={this.props.sendRequest} data={this.props.data} />
        </Collapsable>
      </nav>
    );
  }
}

export default Form;
