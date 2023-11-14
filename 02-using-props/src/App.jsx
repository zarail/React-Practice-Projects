import Header from "./components/Header/Header.jsx";
import Countries from "./components/Countries.jsx";
import Infos from "./components/Infos.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Countries />
        <Infos />
      </main>
    </>
  );
}

export default App;

// in the return of the App component, instead of retruning a div, we can also return a fragment:
// <></> is the same as <Fragment></Fragment> is the same as <div></div>
// but if you use "Fragment", you have to import it from react:
// import { Fragment } from "react";
// it won't be needed with <></> though
