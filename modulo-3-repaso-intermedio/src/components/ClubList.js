import React from 'react';
import Club from './Club';
class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);
    const item = this.props.clubs.map((clubItem,i)=>{return(
        <li key={i}>
           <Club clubProp ={clubItem}  />
        </li>
    )
    });
    return (
      <div>
        <ul>{item}</ul>
      </div>
    );
  }
}
export default ClubList;
