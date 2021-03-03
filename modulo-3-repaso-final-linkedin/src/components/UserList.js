import User from './User';
const UserList = props =>{

  const uElements = props.users.map(user =>{
    console.log(user);
    return  <li key= {user.id}> <User user ={user}/></li>
  })
  return (
    <section>
      <ul className="cards">
        {uElements}
      </ul>
    </section>
  )
}
export default UserList;