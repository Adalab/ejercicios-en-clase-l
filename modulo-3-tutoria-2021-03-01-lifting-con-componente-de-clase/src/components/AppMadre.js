import React from 'react';
import AppNieta from './AppNieta';

class AppMadre extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    // const props = this.props;
    const { email } = this.props;
    // const email = this.props.email

    return (
      <div className="border--medium">
        <h2>Madre: {this.props.email}</h2>
        <h2>Madre: {props.email}</h2>
        <h2>Madre: {email}</h2>
        <AppNieta email={this.props.email} appNietaHandleInput={this.props.appMadreHandleInput} />
      </div>
    );
  }
}

// const AppMadre = props => {
//   return (
//     <div className="border--medium">
//       <h2>Madre: {props.email}</h2>
//       <AppNieta email={props.email} appNietaHandleInput={props.appMadreHandleInput} />
//     </div>
//   );
// };

export default AppMadre;
