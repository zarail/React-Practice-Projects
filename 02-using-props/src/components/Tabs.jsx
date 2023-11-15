export default function Tabs({ children }) {
  // here we return a fragment ...
  // menu element will wrap the tabs
  return (
    <>
      <menu>
        <TabButton
          isSelected={selectedCountry === "austria"}
          onClick={() => handleSelect("austria")}
        >
          Austria
        </TabButton>
        <TabButton
          isSelected={selectedCountry === "germany"}
          onClick={() => handleSelect("germany")}
        >
          Germany
        </TabButton>
        <TabButton
          isSelected={selectedCountry === "liechtenstein"}
          onClick={() => handleSelect("liechtenstein")}
        >
          Liechtenstein
        </TabButton>
        <TabButton
          isSelected={selectedCountry === "luxembourg"}
          onClick={() => handleSelect("luxembourg")}
        >
          Luxembourg
        </TabButton>
        <TabButton
          isSelected={selectedCountry === "switzerland"}
          onClick={() => handleSelect("switzerland")}
        >
          Switzerland
        </TabButton>
      </menu>
      {/* ... and the "content" which will be shown by chooing a tab
      the "children" will show the actual contents */}
      {children}
    </>
  );
}
