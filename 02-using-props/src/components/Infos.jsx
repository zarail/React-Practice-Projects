import { useState } from "react";
// useState is a function that is called a "hook"
// it returns an array with two elements
// functions that start with "use" are hooks
// we must call it on the top level of the component function!
import TabButton from "./TabButton";
import Section from "./Section";
import { INFOS } from "../data";
import Tabs from "./Tabs";

export default function Infos() {
  const [selectedCountry, setSelectedCountry] = useState();

  // If you use useState(); without providing an initial value, the state variable will be initialized with "undefined". This is typically used when the initial value doesn't matter, or you want to update it shortly after the component mounts.

  function handleSelect(selectedButton) {
    // selectedButton, so that we know which country (button) was selected
    setSelectedCountry(selectedButton);
  }

  let tabContent = <p>Please select a country.</p>;

  if (selectedCountry) {
    tabContent = (
      <div id="tab-content">
        <h2>{INFOS[selectedCountry].name}</h2>
        <p>{INFOS[selectedCountry].description}</p>
      </div>
    );
  }

  return (
    /* we pass "buttons" as a special prop to the Tabs component
    so they will have the hook things and handlers with them */
    <Section title="Country Information" id="infos">
      <Tabs
        ButtonsContainer="menu" // or "div" or "nav" or "ul" or "ol" --> the props "ButtonsContainer" accepts a component identifier (the string, here "menu") as a value.
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
        {/* we pass the tabContent as children to the Tabs component */}
      </Tabs>
    </Section>
  );
}
