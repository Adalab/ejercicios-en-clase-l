import React from 'react';
const Club =(props)=>{
    const itemMembers = props.clubProp.members.map((member,index)=>{return(
        <li key={index} className="members">
            {member}
        </li>
    )});
    return(
        <article>
            <h2>{props.clubProp.name}</h2>
            <i className={props.clubProp.fa}></i>
            <h4>Members</h4>
            <ul>
                {itemMembers}
            </ul>
        </article>
    )

}
export default Club;