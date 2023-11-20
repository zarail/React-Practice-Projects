// here we need to modify the Input component to conditionally render either a <textarea> or an <input> based on the value of the richText prop.
// we should also forward all other props to the rendered element.

export default function Input({ richText, ...props }) {
  if (richText) {
    return <textarea {...props} />;
  } else {
    return <input {...props} />;
  }
}

// OR:
// return richText ? <textarea {...props} /> : <input {...props} />;

/*
In this code:

- richText is destructured from the props, and the rest of the props are collected in the props object using the rest (...) operator.
- The InputComponent variable is assigned either the string 'textarea' or 'input' based on the value of the richText prop.
- The JSX uses the dynamic InputComponent to render either a <textarea> or an <input>.
- The spread operator (...props) is used to forward all other props to the rendered element.

--> Now, your Input component will render either a <textarea> or an <input> based on the richText prop, and it will forward all other props to the rendered element.

You can then use this Input component in your App.js file as you've shown in your original code.
*/
