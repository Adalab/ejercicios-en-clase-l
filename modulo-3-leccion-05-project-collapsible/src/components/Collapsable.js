import React from 'react';
import '../stylesheets/Collapsable.scss';

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      isOpen: false,
      email: '',
      name:'',
    };
    // events
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }
  // events
  handleHeaderClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // render
  render() {
    // get open / close class name 
    const openClassName = this.state.isOpen ? 'open' : '';
    const openText = this.state.isOpen ? 'Abierto' : 'Cerrado';
    return (
      <div className={`collapsable-container ${openClassName}`}>
        <div className="collapsable-header" onClick={this.handleHeaderClick}>
          {this.props.title}: {openText}
        </div>
        <div className="collapsable-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsable;
