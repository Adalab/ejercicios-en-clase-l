import React from "react";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangePalette = this.handleChangePalette.bind(this);
  }
  handleChangePalette(ev) {
    this.props.handleChangePalette(ev.target.value);
  }
  render() {
    return (
      <form
        className="customize-design__colors  js-section"
        action=""
        method="GET"
      >
        <>
          <h2 className="customize-design__colors-title">Colores</h2>
          <label
            className="customize-design__colors1 js-customize-design__colors"
            htmlFor="colors1"
            id="customize-design__colors1"
          >
            <input
              className="customize-design__colors1-selection js-customize-design__colors1-selection"
              type="radio"
              id="colors1"
              value="greenpalette"
              name="colors"
              onChange={this.handleChangePalette}
              checked={this.props.palette === 1 ? true : false}
            />
            <div className="customize-design__colors1-boxes1"></div>
            <div className="customize-design__colors1-boxes2"></div>
            <div className="customize-design__colors1-boxes3"></div>
          </label>
          <label
            className="customize-design__colors2 js-customize-design__colors"
            htmlFor="colors2"
            id="customize-design__colors2"
          >
            <input
              className="customize-design__colors2-selection js-customize-design__colors1-selection"
              type="radio"
              id="colors2"
              value="orangepalette"
              name="colors"
              onChange={this.handleChangePalette}
              checked={this.props.palette === 2 ? true : false}
            />
            <div className="customize-design__colors2-boxes1"></div>
            <div className="customize-design__colors2-boxes2"></div>
            <div className="customize-design__colors2-boxes3"></div>
          </label>
          <label
            className="customize-design__colors3 js-customize-design__colors"
            htmlFor="colors3"
            id="customize-design__colors3"
          >
            <input
              className="customize-design__colors3-selection js-customize-design__colors1-selection"
              type="radio"
              id="colors3"
              value="bluepalette"
              name="colors"
              onChange={this.handleChangePalette}
              checked={this.props.palette === 3 ? true : false}
            />
            <div className="customize-design__colors3-boxes1"></div>
            <div className="customize-design__colors3-boxes2"></div>
            <div className="customize-design__colors3-boxes3"></div>
          </label>
        </>
      </form>
    );
  }
}

export default Design;
