'use strict';

// definición de super: el método super ejecuta el método del mismo nombre donde está de la clase superior
// - si ejecutamos super dentro de un constructor estamos ejecutando el constructor de la clase superior
// - si ejecutamos super dentro de un render estamos ejecutando el render de la clase superior

// este código sería el que está dentro de la librería de React
// componente principal del que heredan todos los componentes que nosotras hacemos

class ReactComponent {
  constructor(selector, props) {
    // en el constructor principal hago todas las cosas comunes a todos los componentes
    this.selector = selector;
    this.props = props;
  }

  render() {}

  renderInDom() {
    const htmlCode = this.render();
    const element = document.querySelector(this.selector);
    element.innerHTML = htmlCode;
  }
}

// este código es el que nosotras escribimos en nuestro proyecto
// componente hecho por nosotras

class Header extends ReactComponent {
  constructor(selector, props) {
    // llamando al super ejecuto el constructor de la clase de la que heredo: ReactComponent
    // es decir, ejecuto todas las cosas comunes a todos los componentes
    super(selector, props);
    // a partir de aquí escribo el código que NO es común a todas los componentes
    // es decir, el código que solo pertenece a este componente
  }

  render() {
    super();
    return `<header>Soy la cabecera y mi título es: ${this.props.title}</header>`;
  }
}

// componente hecho por nosotras

class Footer extends ReactComponent {
  constructor(selector, props) {
    // llamando al super ejecuto el constructor de la clase de la que heredo: ReactComponent
    // es decir, ejecuto todas las cosas comunes a todos los componentes
    super(selector, props);
    // a partir de aquí escribo el código que NO es común a todas los componentes
    // es decir, el código que solo pertenece a este componente
  }

  render() {
    return `<footer>Soy el footer y mi copyright es: ${this.props.copyright}</footer>`;
  }
}

// creo los componentes

// este código sería equivalente a <Header title="Aprendiendo cómo funciona super()" />
const header = new Header(
  '.js-header', // selector
  { title: 'Aprendiendo cómo funciona super()' } // props
);

// este código sería equivalente a <Footer copyright="Hecho en Adalab con ❤️" />
const footer = new Footer(
  '.js-footer', // selector
  { copyright: 'Hecho en Adalab con ❤️' } // props
);

// aquí React renderizaría los componentes

header.renderInDom();
footer.renderInDom();
