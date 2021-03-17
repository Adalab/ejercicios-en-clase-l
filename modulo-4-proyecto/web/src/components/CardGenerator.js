import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import inputsJson from "../data/inputsJson.json";
import api from "../services/api";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);

    //STATE
    this.state = {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: 1,
      apiSuccess: false,
      apiCardUrl: "",
      apiError: "",
      isClickable: false,
      isLoading: false,
    };

    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangePalette = this.handleChangePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  //EVENT HANDLER
  updateAvatar(image) {
    this.setState({ photo: image });
  }

  handleChangeInput(data) {
    this.setState({
      [data.inputName]: data.inputValue,
    });
  }

  handleChangePalette(paletteValue) {
    if (paletteValue === "greenpalette") {
      this.setState({ palette: 1 });
    } else if (paletteValue === "orangepalette") {
      this.setState({ palette: 2 });
    } else if (paletteValue === "bluepalette") {
      this.setState({ palette: 3 });
    }
  }

  handleReset() {
    this.setState({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: 1,
    });
  }

  //Activar botón "crear tarjeta"

  clickShareBtn() {
    let clickable = false;
    if (
      this.state.name.length !== 0 &&
      this.state.job.length !== 0 &&
      this.state.email.length !== 0 &&
      this.state.phone.length !== 0 &&
      this.state.linkedin.length !== 0 &&
      this.state.github.length !== 0 &&
      this.state.photo.includes("64")
    ) {
      clickable = true;
    }
    this.setState((prevState) => ({
      isClickable: (prevState.isClickable = clickable),
    }));
  }

  //LOCAL STORAGE
  componentDidMount() {
    this.getFromLocalStorage();
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  getFromLocalStorage() {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));

      this.setState({
        name: data.name,
        job: data.job,
        email: data.email,
        phone: data.phone,
        linkedin: data.linkedin,
        github: data.github,
        photo: data.photo,
        palette: data.palette,
      });
    }
  }

  //CREATE CARD
  //obj con los datos que quiero enviar al servidor
  sendRequest() {
    this.setState({ isLoading: true });
    const apiData = {
      name: this.state.name,
      job: this.state.job,
      email: this.state.email,
      phone: this.state.phone,
      linkedin: this.state.linkedin,
      github: this.state.github,
      photo: this.state.photo,
      palette: this.state.palette,
    };
    //envio los datos al servidor
    api
      .createCard(apiData)
      //espero a que responda
      .then((response) => {
        //guardo las respuesta en el estado
        if (response.success === true) {
          this.setState({
            apiSuccess: true,
            apiCardUrl: response.cardURL,
            apiError: "",
            isLoading: false,
          });
        } else {
          this.setState({
            apiSuccess: false,
            apiCardUrl: "",
            apiError: response.error,
            isLoading: false,
          });
        }
      });
  }

  render() {
    return (
      <>
        <Header />
        <main className="gen-main">
          <Preview data={this.state} handleReset={this.handleReset} />
          <Form
            inputsJson={inputsJson}
            handleChangeInput={this.handleChangeInput}
            data={this.state}
            updateAvatar={this.updateAvatar}
            handleChangePalette={this.handleChangePalette}
            sendRequest={this.sendRequest}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
