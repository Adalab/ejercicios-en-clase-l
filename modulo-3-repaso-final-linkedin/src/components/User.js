const User = props =>{
  
  return (
    <>
        <img className="card__img" src={props.user.image} alt="foto de mujer"/>
        <h4 className="card__title">{props.user.name} {props.user.lastname}  </h4>
        <p className="card__description">
        {props.user.city} / {props.user.gender}</p>
    </>
  )
}
export default User;