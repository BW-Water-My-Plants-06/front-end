import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const initialCredentials = {
    email: "",
    password: "",
  }

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const signIn = (e) => {
    // axiosWithAuth()
    // .post('/auth/login', credentials)
    //   .then( (res) => {
    //     localStorage.setItem("token", res.data.token);
    //     props.history.push('/home')
    //   })
    //   .catch(err=> {
    //     console.log(err);
    //   })
    credentials.email === 'client' ? localStorage.setItem("role", "client") : localStorage.setItem("role", "client") 
    localStorage.getItem("role") === 'client' ? props.history.push("/home"): props.history.push("/organizer")
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input 
          type="email" 
          placeholder="Email" 
          name="email"
          onChange={handleChange}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          name="password"
          onChange={handleChange}
        />
      </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit" onClick={signIn}>
        Signin
      </SubmitButton>
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

