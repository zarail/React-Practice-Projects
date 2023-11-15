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
