// here we conditionally render either a <textarea> or an <input> based on the value of the richText prop.
// we also forward all other props to the rendered element. (...props)

export default function Input({ richText, ...props }) {
  return richText ? <textarea {...props} /> : <input {...props} />;
  // <taextarea> is a built-in HTML element that allows users to enter multiple lines of text.
  // <input> is a built-in HTML element that allows users to enter a single line of text.
}

/* OR:
if (richText) {
    return <textarea {...props} />;
  } else {
    return <input {...props} />;
  }
*/

/*
1. Function Signature:

export default function Input({ richText, ...props })

--> This is a functional component named Input. It takes an object as its argument, and it uses object destructuring to extract the richText property and collect the rest of the properties in the props object.

2. Conditional Rendering:

if (richText) { return <textarea {...props} />; } else { return <input {..props} />; }

--> This is a conditional statement. If richText is truthy, it returns a <textarea> element with all the props passed to it using the spread operator ({...props}). If richText is falsy, it returns an <input> element with the same set of props.

Explanation:

- If the richText prop is true, the Input component will render a <textarea> with all the additional props passed to it.

- If the richText prop is false or not provided, the Input component will render an <input> with the same set of additional props.

In summary, this code defines a React functional component that conditionally renders either a <textarea> or an <input> based on the value of the richText prop. It uses object destructuring to extract the richText prop and the rest of the props, and it uses the spread operator to pass those props to the rendered element.
*/

/*
In this code:

- richText is destructured from the props, and the rest of the props are collected in the props object using the rest (...) operator.
- The InputComponent variable is assigned either the string 'textarea' or 'input' based on the value of the richText prop.
- The JSX uses the dynamic InputComponent to render either a <textarea> or an <input>.
- The spread operator (...props) is used to forward all other props to the rendered element.

--> Now, your Input component will render either a <textarea> or an <input> based on the richText prop, and it will forward all other props to the rendered element.

You can then use this Input component in your App.js file as you've shown in your original code.
*/
