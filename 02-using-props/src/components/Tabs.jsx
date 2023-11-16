export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // here we return a fragment ...
  // menu element will wrap the tabs
  // const ButtonsContainer = buttonsContainer; // (trick)
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

// (trick): in the const ButtonsContainer we use the prop as a component type, we set the value to buttonsContainer, but started with a capital letter, so that it can be used as a custom component, but has the value of the prop!!! ... then in the "infos" component it will see that it is a string, a <menu> element, and will render it as such (chapter 67)
// const ButtonsContainer = buttonsContainer; // (trick)

// OR we can get rid of the trick and use the prop directly with capital letter (see above) (chapter 67)

// "menu" has been set to be the default value for the prop "buttonsContainer" (chapter 68)
