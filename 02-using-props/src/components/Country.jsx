export default function Country({ flag, name, capital }) {
  return (
    <li>
      <img src={flag} alt={name} />
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
    </li>
  );
}

/*
in the function parameters part, instead of "props" we can use "object destructuring" to get the props, so we can use the props directly in the function:

function Country(props) { // props is an object with the props
  return (
    <li>
      <img src={props.flag} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Capital: {props.capital}</p>
    </li>
  );
}

has been changed to:

function Country({ flag, name, capital }) { // props is an object with the props
  return (
    <li>
      <img src={flag} alt={name} />
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
    </li>
  );
}
*/
