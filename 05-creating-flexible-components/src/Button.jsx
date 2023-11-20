export default function Button({ children, mode = 'filled', Icon, ...props}) {
  // "mode = 'filled'" as a default

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

// {Icon && (...)}: If Icon is truthy (meaning it exists), then the content inside the parentheses is rendered.

// <span className="button-icon"><Icon /></span>: This code is rendering an <Icon /> component inside a <span> with the class name "button-icon." This is likely a pattern for rendering an icon within the button.

// <span>{children}</span>: This code is rendering the children prop inside a <span>. This is likely a pattern for rendering the text inside the button.

/*
<span> in HTML:

In HTML, the <span> element is an inline container used to group and apply **styles** to inline elements. It doesn't add any specific styling or layout to the content within it; it's more of a generic container. The <span> element is often used when you want to apply CSS styles or manipulate the content using JavaScript without introducing any semantic meaning.

Here's a basic example of how the <span> element can be used in HTML:

<p>This is a <span style="color: blue; font-weight: bold;">blue and bold</span> text.</p>

In this example, the <span> element is used to group the text "blue and bold" so that a specific style can be applied to it.

In this app:

<span className="button-icon">
  <Icon />
</span>

Here, the <span> element is being used to contain an <Icon /> component. It's likely used to apply specific styling or to group the icon within the structure of the component. The class name "button-icon" suggests that it might be used for styling purposes related to a button or an icon in a button.
*/
