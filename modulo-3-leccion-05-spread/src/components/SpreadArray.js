import React from 'react';

class SpreadArray extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.state = {
      users: ['sofia@gmail.com']
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  handleNewUser(ev) {
    this.setState({
      users: [...this.state.users, ev.target.value]
    });
  }

  render() {
    console.log('El estado es', this.state);
    return (
      <div className="border--medium">
        <h2>Spread con arrays</h2>
        <div className="col2">
          <form>
            <label className="form__label" htmlFor="email">
              Escribe aquí el email:
            </label>
            <input
              className="form__input-text display-block"
              type="text"
              name="email"
              id="email"
              onBlur={this.handleNewUser}
            />
          </form>
          <div className="border--medium"></div>
        </div>
      </div>
    );
  }
}

export default SpreadArray;
