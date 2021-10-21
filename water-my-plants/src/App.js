import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlantList from './components/PlantList';
import PlantDetail from './components/PlantDetail';
import Profile from "./components/Profile";
import  Contact  from './components/contact'
//components

// import footer from ''

//Route 
// import Home from "./components/Home"
// import ResetPassword from "./components/ResetPassword"
// import DashBoard from ''
// import Contact from ''

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

// Create Plant

const createPlant = async (id) => {
  const res = await fetch(`https://water-my-plants-2-electric.herokuapp.com/api/plants/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(plants),
  })

  const data = await res.json()

  setPlants([...plants, data])

// Edit Plant

// Delete Plant
    const deletePlant = async (id) => {
      await fetch(`https://water-my-plants-2-electric.herokuapp.com/api/plants/${id}`, {
        method: 'DELETE',
      })
  
      setPlants(plants.filter((plants) => plants.id !== id))
    }
  

  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Switch>
          {/* <Route exact path="/" /> */}
          <Route path="/signin" component={AccountBox} />
          <Route path="/signup" component={AccountBox} />
          {/* <Route path='/' exact component='Home'/>
          <Route path='/' exact component='DashBoard'/>
          <Route path='/' exact component='Contact'/>
          <Route path='/' exact component='ResetPassword'/> */}
          <Route exact path="/profile" component={Profile} />
          <Route path='/contact' component={Contact} />
          <PlantList />
        </Switch>
      </AppContainer> 
    </BrowserRouter>

  );
}
}
export default App;
