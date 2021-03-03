import User from './User';
const UserList = props =>{

  const uElements = props.users.map(user =>{
    return  <li className="card" key= {user.id}> <User user ={user}/></li>
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