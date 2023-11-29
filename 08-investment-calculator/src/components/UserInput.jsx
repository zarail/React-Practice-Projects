export default function UserInput(props) {
  return (
    <li>
      <span>
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type="number"
          required
          value="0"
          id={props.label}
        />
      </span>
    </li>
  )
}
