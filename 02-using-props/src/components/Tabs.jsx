export default function Tabs({ children, buttons }) {
  // here we return a fragment ...
  // menu element will wrap the tabs
  return (
    <>
      <menu>{buttons}</menu>
      {/* ... and the "content" which will be shown by chooing a tab
      the "children" will show the actual contents */}
      {children}
    </>
  );
}

// so we have a lean structure with buttons inside a menu
// and the actual content as children
