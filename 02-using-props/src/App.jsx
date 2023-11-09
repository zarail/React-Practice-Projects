import { useState } from "react";
// useState is a function that is called a "hook"
// it returns an array with two elements
// functions that start with "use" are hooks
// we must call it on the top level of the component function!
import { COUNTRIES, INFOS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import Country from "./components/Country.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedCountry, setSelectedCountry] = useState();

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
    <div>
      <Header />
      <main>
        <section id="countries">
          <ul>
            {/*
            instead of writing the same code 5 times, we can use "map":
            
            <Country
              flag={COUNTRIES[0].flag}
              name={COUNTRIES[0].name}
              capital={COUNTRIES[0].capital}
            />
            <Country {...COUNTRIES[1]} />
            <Country {...COUNTRIES[2]} />
            <Country {...COUNTRIES[3]} />
            <Country {...COUNTRIES[4]} />
            */}

            {COUNTRIES.map((countryItem) => (
              <Country key={countryItem.name} {...countryItem} />
            ))}
          </ul>
        </section>
        <section id="infos">
          <h2>Country Information</h2>
          <menu>
            <TabButton
              isSelected={selectedCountry === "austria"}
              onSelect={() => handleSelect("austria")}
            >
              Austria
            </TabButton>
            <TabButton
              isSelected={selectedCountry === "germany"}
              onSelect={() => handleSelect("germany")}
            >
              Germany
            </TabButton>
            <TabButton
              isSelected={selectedCountry === "liechtenstein"}
              onSelect={() => handleSelect("liechtenstein")}
            >
              Liechtenstein
            </TabButton>
            <TabButton
              isSelected={selectedCountry === "luxembourg"}
              onSelect={() => handleSelect("luxembourg")}
            >
              Luxembourg
            </TabButton>
            <TabButton
              isSelected={selectedCountry === "switzerland"}
              onSelect={() => handleSelect("switzerland")}
            >
              Switzerland
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

// instead of the anonymous arrow function, we can also use a function declaration:
// () => {} could be function() {}
