import React from 'react';
import PropTypes from 'prop-types';

class ShowCard extends React.Component {
  constructor(props) {
    super(props);
    this.classSelected = "showFavoriteBckColor";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if( this.classSelected === "" ) {
      this.classSelected = "showFavoriteBckColor";
    }
    else {
      this.classSelected = "";
    }
    this.forceUpdate();
  }

  render() {
    
    return (
      <li className={this.classSelected + " sectionTwo__li js__showItem"} id={this.props.id} onClick={this.handleClick}>
        <img
          className="sectionTwo__img"
          src={this.props.imgSrc}
          alt="poster image"
          title="poster image"
        />
        <h2 className="sectionTwo__titleShow">{this.props.name}</h2>{this.props.children}
      </li>
    );
  }
}

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name:PropTypes.string,
  children: PropTypes.element
}

ShowCard.defaultProps = {
  name : '[NS / NC]'
}

export default ShowCard;
