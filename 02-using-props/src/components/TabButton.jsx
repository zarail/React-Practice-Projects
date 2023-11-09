export default function TabButton({ children, onSelect, isSelected }) {
  // the folowing will be done in vanilla JS, but not in React.js:
  // document.querySelector("button").addEventListener("click", () => {
  //});
  // in React we don't have imperative code, but declarative code!
  // we declare what we want to happen, not how it should happen:

  // here we add a special attribute (prop) to the button element:
  // the "onClick" prop
  // and the value will be a function
  // naming convention is "handle" + "event name"

  //function handleClick() {
  //  console.log("clicked!");
  //}

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
