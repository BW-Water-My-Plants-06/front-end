import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import  Contact  from './components/contact'
import CreateClassForm from "./components/CreateClassForm";
import Class from "./components/Class";
import Classes from "./components/Classes";
import "./App.css";
import EditClassForm from "./components/EditClassForm";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [plants, setPlants] = useState([])


  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Switch>
          <Route path="/signin" component={AccountBox} />
          <Route path="/signup" component={AccountBox} />
          <Route exact path="/profile" component={Profile} />
          <Route path='/contact' component={Contact} />
          <Route path="/adding-new" component={Classes} />
          <Route path="/classes/edit/:id" component={EditClassForm} />
          
        </Switch>
      </AppContainer> 
    </BrowserRouter>

  );
}

export default App;
