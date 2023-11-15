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
    <Section title="Country Information" id="infos">
      <Tabs>{tabContent}</Tabs>
      {/* we pass the tabContent as children to the Tabs component */}
    </Section>
  );
}
