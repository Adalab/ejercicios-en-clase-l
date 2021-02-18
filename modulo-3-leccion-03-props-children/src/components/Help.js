import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="help">
        <p>Ayuda: {this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
