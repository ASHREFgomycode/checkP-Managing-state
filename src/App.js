import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './components/ListUsers';
import Nav from './components/Nav';
import Home from './components/Home';
import Profil from './components/Profil';
import { useState } from 'react';
import PrivateUser from './components/PrivateUser';

function App() {
  const [auth,setAuth]=useState(false)
  return (
  <div>

    <Nav auth={auth} setAuth={setAuth}/> 

 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/listUsers' element={ <PrivateUser auth={auth}>  <ListUsers/> </PrivateUser> }/>
  <Route path='/Profil/:id' element={  <PrivateUser auth={auth}>   <Profil/> </PrivateUser>  }/>
 </Routes>

  
  
  
  </div>



  );
}

export default App;
