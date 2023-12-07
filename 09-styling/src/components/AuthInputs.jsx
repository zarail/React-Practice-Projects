import { useState } from 'react';
import { styled } from "styled-components";

// styled is a js object, which maps to html elements. I has a new special syntax, which allows us to write css in js. We don't need camelCase notation here. The name will be Capitalized as it stores a ReactJS component:
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
// it is a common convention to prefix the props which you only want to use in your styled component styling code with a dollar sign. This is still a valid prop name and allowed in JavaScript, but you won't clash with built-in props:

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$invalid}) => $invalid ? '#f87171' : '#6b7280'};
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({$invalid}) => $invalid ? '#fed2d2' : '#d1d5db'};
  color: ${({$invalid}) => $invalid ? '#ef4444' : '#374151'};
  border: 1px solid ${({$invalid}) => $invalid ? '#f73f3f' : 'transparent'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      {/* <div className="controls"> WILL BE ControlContainer!*/}
      <ControlContainer>
        <p>
          {/* the follwoing condition will change the color of the lable "Email" to red if and invalid email address is passed to the field and SIGN IN btn is clicked (sunbmitted) (the consition is not set for the password field)*/}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            $invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
        </ControlContainer>
        {/* </div> ALSO THE CLOSING TAG */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
