import { COUNTRIES } from "./data.js";
import Header from "./components/Header.jsx";
import Country from "./components/Country.jsx";

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
      </main>
    </div>
  );
}

export default App;
