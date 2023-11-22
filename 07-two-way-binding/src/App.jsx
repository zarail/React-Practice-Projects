import { useState } from "react";
import Review from "./Review";

function App() {
  const [feedback, setFeedback] = useState(""); // variable names must be identical to the ones in the Review component
  const [studentName, setStudentName] = useState(""); // variable names must be identical to the ones in the Review component
  const [buttonText, setButtonText] = useState("Save");

  // but in the functions we can use any name we want, as long as we use the correct setter and we follwo the convention of using the word "handle" in the name of the function:

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function handleStudentNameChange(event) {
    setStudentName(event.target.value);
  }

  const handleClick = () => {
    setButtonText("Saved!");
  };

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            value={studentName}
            onChange={handleStudentNameChange}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={studentName} />
        {/* feedback={feedback} student={studentName} (before "=" variable name in this component and inside {} variable name of the Review component!!!)*/}

        <p>
          <button onClick={handleClick}>{buttonText}</button>
        </p>
      </section>
    </>
  );
}

export default App;

/*

** TWO-WAY BINDING ***
when we get a value out of an <input> and we feed a value back into it.

*/
