import { COUNTRIES } from "./data.js";

function Header() {
  return (
    <header>
      <h1>German is the official language in these countries:</h1>
    </header>
  );
}

function Country({ flag, name, capital }) {
  return (
    <li>
      <img src={flag} alt={name} />
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
    </li>
  );
}

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
