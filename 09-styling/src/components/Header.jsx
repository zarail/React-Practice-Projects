import { styled } from "styled-components";

import logo from '../assets/logo.png';
// import classes from './Header.module.css'; // instead of import './Header.css';

const StyledHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 2rem;
margin-bottom: 2rem;

& img {
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
}

& h1 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;
}

& p {
  text-align: center;
  font-style: italic;
  font-size: 1rem;
  color: 'var(--color-primary)';
  margin: 0;
}

@media (min-width: 768px) {
  & {
    margin-bottom: 4rem;
  }

  & h1 {
    font-size: 2.25rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
        // this is how inline styles are added in React:
        // style={{
        //   fontStyle: 'italic',
        //   fontSize: '1rem',
        //   color: 'var(--color-primary)',
        // }}
      >A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
