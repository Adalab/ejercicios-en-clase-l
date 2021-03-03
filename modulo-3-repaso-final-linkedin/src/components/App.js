import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import UserList from './UserList';
import UserDetail from './UserDetail';
import getDataFromApi from '../services/getDataFromApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  useEffect(()=>{
    getDataFromApi().then(data => setUsers(data));
  },[]);
  const handleFilter = (inputChange) =>{
    if(inputChange.key ==='name'){
      setName(inputChange.value);
    }
    else if(inputChange.key ==='gender'){
      setGender(inputChange.value);
    }
  }

  const filterUsers = users.filter(user => {return user.name.toUpperCase().includes(name.toUpperCase())}).filter( user =>{

  });

  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
    <Filters handleFilter ={handleFilter}/>
    <UserList users ={filterUsers}/>
      </div>
    </>
  );
};
export default App;
