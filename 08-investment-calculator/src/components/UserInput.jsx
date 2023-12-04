import { useState } from 'react';

export default function UserInput() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  /* --> instead of:

  const [initialInvestment, setInitialinvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  */

  // the "inputIdentifier" will get a string as a value that either is initialInvestment, or annualInvestment, or expectedReturn, or duration:

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput, // copy all the old values in the new obj
        [inputIdentifier]: newValue, // overwrite the value of the changed input
      };
    });
  };

  /* --> one generic function to handle all changes (instead of four!):

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

  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) => handleUserInputChange('initialInvestment', event.target.value)}
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) => handleUserInputChange('annualInvestment', event.target.value)}
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) => handleUserInputChange('expectedReturn', event.target.value)}
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => handleUserInputChange('duration', event.target.value)}
        />
      </p>
    </div>
  </section>
}

// the <section> includes two divs, each with two paragraphs marked with class "input-group"
