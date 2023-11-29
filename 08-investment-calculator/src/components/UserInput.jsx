export default function UserInput(props) {
  return (
    <li>
      <span>
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type="text"
          required
          value="placeholder"
          id={props.label}
        />
      </span>
    </li>
  )
}
