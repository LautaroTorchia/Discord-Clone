import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import { login, logout, selectUser} from './features/counter/userSlice'
import { auth } from './firebase';

function App() {
  const user=  useSelector(selectUser)
  const dispatch =useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
          dispatch(login({
            uid:authUser.uid, 
            photo:authUser.photoURL, 
            email:authUser.email, 
            displayName:authUser.displayName}
            ))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      { user ? <HomePage /> :<h1><LoginPage /></h1>}
    </div>
  );
}

export default App;
