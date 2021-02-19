import React from "react";
import CatItem from './CatItem';

class CatList extends React.Component {
  constructor(props) {
    super(props);

    // bind
    // this.state
  }
  render() {
    return (
      <ul className="section-cats_list">
        <CatItem name="A cat"       src="200/300" />
        <CatItem name="Another cat" src="300/400"/>
        <CatItem name="Moar cat"    src="500/200"/>
        {/* 
        {
          name:"A cat",
          src:"http://placekitten.com/200/300"
        }
        */}


        
{/*         <li>
          <a href="http://lorempixel.com">Another cat</a>
          <img src="http://placekitten.com/300/400" />
        </li>
        <li>
          <a href="http://lorempixel.com">Moar cat</a>
          <img src="http://placekitten.com/300/200" />
        </li> */}
      </ul>
    );
  }
}

export default CatList;
