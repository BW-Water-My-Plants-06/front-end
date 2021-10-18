import React from 'react';
import './App.css';
//import {Route, Switch} from "react-router-dom";//


//components

import NavBar from ''
import footer from ''

//Route 
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import ResetPassword from "./components/ResetPassword"
import DashBoard from ''
import Contact from ''


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <switch>
          <route path='/' exact component='Home'/>
          <route path='/' exact component='DashBoard'/>
          <route path='/' exact component='Login'/>
          <route path='/' exact component='Sign-Up'/>
          <route path='/' exact component='Contact'/>
          <route path='/' exact component='ResetPassword'/>
        </switch>
      </main>
      <footer/>
    
    </div>
  );
}

export default App;
