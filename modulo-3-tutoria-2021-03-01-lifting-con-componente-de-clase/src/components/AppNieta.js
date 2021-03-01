import React from 'react';

class AppNieta extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    // console.log('ha cambiado', ev.target.value);
    this.props.appNietaHandleInput(ev.target.name, ev.target.value);
  }

  render() {
    return (
      <div className="border--medium">
        <h2>Nieta</h2>
        <form>
          <label>
            Email:
            <input
              className="form__input-text"
              type="text"
              name="email"
              value={this.props.email}
              onChange={this.handleInput}
            />
          </label>
        </form>
      </div>
    );
  }
}

// const AppNieta = props => {
//   const handleInput = ev => {
//     // console.log('ha cambiado', ev.target.value);
//     props.appNietaHandleInput(ev.target.name, ev.target.value);
//   };

//   return (
//     <div className="border--medium">
//       <h2>Nieta</h2>
//       <form>
//         <label>
//           Email:
//           <input
//             className="form__input-text"
//             type="text"
//             name="email"
//             value={props.email}
//             onChange={handleInput}
//           />
//         </label>
//       </form>
//     </div>
//   );
// };

export default AppNieta;
