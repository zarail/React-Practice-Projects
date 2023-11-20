export default function Button({ children, mode = 'filled', Icon, ...props}) {
  let cssClasses = `button ${mode}-button`; // string interpolation

  if (Icon) {
    cssClasses += ' icon-button'; // cssClasses = cssClasses + ' icon-button'; (add this to classes)
  }

  if (props.className) {
    cssClasses += ' ' + props.className; // to add a space between the classes, so that they work!
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

// we pass "mode = 'filled'" as a default value to the Button component.

// we wrap the icon with a <span className="button-icon"> to achieve the target look
