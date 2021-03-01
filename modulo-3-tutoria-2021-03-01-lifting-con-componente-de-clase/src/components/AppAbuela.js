import React from 'react';
import AppMadre from './AppMadre';

class AppAbuela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '123'
    };
    this.appAbuelaHandleInput = this.appAbuelaHandleInput.bind(this);
  }

  appAbuelaHandleInput(inputKey, inputValue) {
    // console.log(this);
    console.log('Data:', inputKey, inputValue);
    // this.state.email = inputValue; mal
    this.setState({
      email: inputValue
    }); // bien
  }

  render() {
    return (
      <div className="border--medium">
        <h1>Abuela</h1>
        <AppMadre email={this.state.email} appMadreHandleInput={this.appAbuelaHandleInput} />
      </div>
    );
  }
}

// const AppAbuela = () => {
//   const [email, setEmail] = useState('123');

//   const appAbuelaHandleInput = (inputKey, inputValue) => {
//     console.log('Data:', inputKey, inputValue);
//     // email = inputValue; mal
//     setEmail(inputValue); // bien
//   };

//   return (
//     <div className="border--medium">
//       <h1>Abuela</h1>
//       <AppMadre email={email} appMadreHandleInput={appAbuelaHandleInput} />
//     </div>
//   );
// };

export default AppAbuela;
