import { useState } from 'react';

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"

// userInput (App), input (UserInput) and theInput (ResultsTable) are all the same thing, but they are named differently in different components, to avoid confusions.

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // the "inputIdentifier" will get a string as a value that either is initialInvestment, or annualInvestment, or expectedReturn, or duration:

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput, // copy all the old values in the new obj
        [inputIdentifier]: newValue, // overwrite the value of the changed input
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput input={userInput} onChangeInput={handleUserInputChange} />
      <ResultsTable theInput={userInput} />
    </>
  )
}

export default App

/* the current useState is implemented instead of:

  const [initialInvestment, setInitialinvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  */

  /* the handler function: one generic function to handle all changes (instead of four!):

  function handleInitialInvestmentChange(event) {
    setInitialinvestment(event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }
  */
