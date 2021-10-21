import React, { useState } from "react";
import axiosWithAuth from '../components/utils/axiosWithAuth';
import styled from 'styled-components'

const Button = styled.button`
  color: whitesmoke;
  background-color: #4A7C59;
  font-size: 2rem;
  border-radius: 0.15em;
  text-align: center;
`;

const StyledDiv = styled.div`
  font-size: 2.5rem;
  color: #4A7C59;
  border: 2px solid #4A7C59;
  margin: 10% auto;
  width: 40%;
  background-color: #C8D5B9;
  
  
  
 form{
     display: flex;
     flex-direction: column;
     align-items: left;
     width: fit-content ;
     margin: 2em auto;
 } 
 input, label{
     display: list-item;
     list-style-type: none;
     padding: 0.5em;
 }
`;

const initialValues = { username: "", phone_number: "" };

const StyledMessage = styled.div`
    margin: 1rem;
    font-weight: bold;
    text-align:center;
`

export default function Profile() {
  const [formValues, setFormValues] = useState(initialValues);
    const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .put('/user', formValues)
    .then(res => {
        setFormValues(initialValues)
        setMessage("Account Updated Successfully!")
    })
    .catch(err => {
        setMessage(`Sorry, there was an error updating your account: ${err.message}`)
    })
  }

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <h2>Change Account Info</h2>
        <label>
          New Username:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </label>
        <label>
          New Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={formValues.phone_number}
            onChange={handleChange}
          />
        </label>
        <Button type='submit'>Update Info</Button>
      </form>
      <StyledMessage>{message}</StyledMessage>
    </StyledDiv>
  );
}
