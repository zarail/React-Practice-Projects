export default function Tabs({ children, buttons, buttonsContainer }) {
  // here we return a fragment ...
  // menu element will wrap the tabs
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* ... and the "content" which will be shown by chooing a tab
      the "children" will show the actual contents */}
      {children}
    </>
  );
}

// so we have a lean structure with buttons inside a menu
// and the actual content as children

// here the "tabs" component has multiple slots
// - the buttons
// - the content

// slots are a way to pass content to a component

// setting component types dynamically
// if we want to aloow the developer to choose with wrapper element to use for the tabs component that they reuse in the app
// so we add an additional prop, here: "buttonsContainer"
