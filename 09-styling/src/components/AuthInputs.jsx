import { useState } from 'react';
// import { styled } from "styled-components";

import Button from './Button';
import Input from './Input';

// it is a common convention to prefix the props which you only want to use in your styled component styling code with a dollar sign. This is still a valid prop name and allowed in JavaScript, but you won't clash with built-in props:

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
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      {/* <div className="controls"> WILL BE ControlContainer!*/}
      <div className="flex flex-col gap-2 mb-6">
          <Input
            invalid={emailNotValid}
            label="Email"
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <Input
            invalid={passwordNotValid}
            label="Password"
            type="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
        {/* </div> ALSO THE CLOSING TAG */}
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

/*
styled is a js object, which maps to html elements. I has a new special syntax, which allows us to write css in js. We don't need camelCase notation here. The name will be Capitalized as it stores a ReactJS component:

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
*/
