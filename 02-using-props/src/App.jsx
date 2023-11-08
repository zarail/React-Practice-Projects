import { COUNTRIES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import Country from "./components/Country.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="countries">
          <ul>
            <Country
              flag={COUNTRIES[0].flag}
              name={COUNTRIES[0].name}
              capital={COUNTRIES[0].capital}
            />
            <Country {...COUNTRIES[1]} />
            <Country {...COUNTRIES[2]} />
            <Country {...COUNTRIES[3]} />
            <Country {...COUNTRIES[4]} />
          </ul>
        </section>
        <section id="info">
          <h2>Country Information</h2>
          <menu>
            <TabButton>Austria</TabButton>
            <TabButton>Germany</TabButton>
            <TabButton>Liechtenstein</TabButton>
            <TabButton>Luxembourg</TabButton>
            <TabButton>Switzerland</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
