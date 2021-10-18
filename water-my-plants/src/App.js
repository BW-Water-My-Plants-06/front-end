import React from 'react';
import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components

import NavBar from ''
import footer from ''

//Route 
import Home from "./components/Home"
import ResetPassword from "./components/ResetPassword"
import DashBoard from ''
import Contact from ''

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Switch>
          <Route exact path="/" />
          <Route path="/signin" component={AccountBox} />
          <Route path="/signup" component={AccountBox} />
          <Route path='/' exact component='Home'/>
          <Route path='/' exact component='DashBoard'/>
          <Route path='/' exact component='Contact'/>
          <Route path='/' exact component='ResetPassword'/>
        </Switch>
      </AppContainer> 
    </BrowserRouter>

  );
}

export default App;
