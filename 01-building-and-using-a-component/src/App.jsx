import reactLogo from './assets/react-logo.png';
// --> importing like this will not work in JS, though!

// dynamic value syntax can be used with {} in React.js

const qualitySynonyms = ['in depth and from the ground up',
'from the basics to the advanced',
'thoroughly and comprehensively',
'in a detailed and all-encompassing manner',
'from scratch to expertise'];

// the following function returns a random number between 0 and max
function getRandomSynonym(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function MainGoal() {
  // synonym will be one of the strings in the qualitySynonyms array
  const synonym = qualitySynonyms[getRandomSynonym(4)];

  return (
    <header>
      <img src={reactLogo} alt="atom" className="logo" />
      <h2>My main React goal:</h2>
      <p>
        Learn React.js <em>{synonym}</em>, in order to start my career in tech.
      </p>
    </header>
  )
}

function App() {
  return (
    <div id="app">
      <MainGoal />
    </div>
  );
}

export default App;
