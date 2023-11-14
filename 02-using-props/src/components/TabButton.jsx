export default function TabButton({ children, isSelected, ...props }) {
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

  // here onClick will be passed to the button element as a prop (...props)

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
