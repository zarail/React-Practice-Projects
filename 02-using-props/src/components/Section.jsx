// we add section component bcs the app will probably have more than one section with an <h2> and other children in the future, so we want to make it reusable
// Section is a wrapper component, with props: title, children
// these ...props are called forwarded props or proxy props

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
