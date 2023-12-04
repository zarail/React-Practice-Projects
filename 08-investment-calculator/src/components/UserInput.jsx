import { useState } from 'react';

export default function UserInput() {
  const [initialInvestment, setInitialinvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

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

  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={initialInvestment}
          onChange={handleInitialInvestmentChange}
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={annualInvestment}
          onChange={handleAnnualInvestmentChange}
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          required
          value={expectedReturn}
          onChange={handleExpectedReturnChange}
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value={duration}
          onChange={handleDurationChange}
        />
      </p>
    </div>
  </section>
}

// the <section> includes two divs, each with two paragraphs marked with class "input-group"
