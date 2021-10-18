import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        </Switch>
      </AppContainer> 
    </BrowserRouter>
  );
}

export default App;
