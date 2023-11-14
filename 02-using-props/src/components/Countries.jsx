import Country from "./Country";
import { COUNTRIES } from "../data";

export default function Countries() {
  return (
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
  );
}

// instead of the anonymous arrow function, we can also use a function declaration:
// () => {} could be function() {}
