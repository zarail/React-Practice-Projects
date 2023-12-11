// import { styled } from "styled-components"; // not needed when using Tailwind CSS

import logo from '../assets/logo.png';
// import classes from './Header.module.css'; // instead of import './Header.css';

// the commented-out styled-components code can be found at the end of this file.

// in Tailwind we use the regular HTML tags, so <StyledHeader></StyledHeader> will be changed to <header></header>:

// then we can start adding the utility classes from Tailwind CSS (to the header tag for example):

// flex-col is short for flex-direction: column and is on "vertical axis" by default

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44"/>
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-500"
        // this is how inline styles are added in React:
        // style={{
        //   fontStyle: 'italic',
        //   fontSize: '1rem',
        //   color: 'var(--color-primary)',
        // }}
      >A community of artists and art-lovers.</p>
    </header>
  );
}

// <StyledHeader></StyledHeader> will again be changed to <header></header> when using Tailwind CSS.

  // const StyledHeader = styled.header`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   margin-top: 2rem;
  //   margin-bottom: 2rem;

  //   & img {
  //     object-fit: contain;
  //     margin-bottom: 2rem;
  //     width: 11rem;
  //     height: 11rem;
  //   }

  //   & h1 {
  //     font-size: 1.5rem;
  //     font-weight: 600;
  //     letter-spacing: 0.4em;
  //     text-align: center;
  //     text-transform: uppercase;
  //     color: #9a3412;
  //     font-family: 'Pacifico', cursive;
  //     margin: 0;
  //   }

  //   & p {
  //     text-align: center;
  //     font-style: italic;
  //     font-size: 1rem;
  //     color: 'var(--color-primary)';
  //     margin: 0;
  //   }

  //   @media (min-width: 768px) {
  //     & {
  //       margin-bottom: 4rem;
  //     }

  //     & h1 {
  //       font-size: 2.25rem;
  //     }
  // `;
