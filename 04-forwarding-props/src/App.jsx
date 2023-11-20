import Input from './Input';

function App() {
  return (
    <div id="app">
      <Input type="text" placeholder="Your name" />
      <Input multiline placeholder="Your message" />
    </div>
  );
}

export default App;

/*
In HTML, the type="text" attribute is used with the <input> element to create a single-line text input field. It specifies that the input field should accept and display plain text.

--> type="text" indicates that the input field is intended for plain text input.
*/
