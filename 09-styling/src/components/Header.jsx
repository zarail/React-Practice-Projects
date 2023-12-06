import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p // this is how inline styles are added in React:
        style={{
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--color-primary)',
        }}
      >A community of artists and art-lovers.</p>
    </header>
  );
}
