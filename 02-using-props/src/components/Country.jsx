export default function Country({ flag, name, capital }) {
  return (
    <li>
      <img src={flag} alt={name} />
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
    </li>
  );
}
