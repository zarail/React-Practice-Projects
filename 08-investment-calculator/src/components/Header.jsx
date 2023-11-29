import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <header id="header">
      {/*we don' have to specify the path for the images in the "public" folder, because these file will automaticalley be surfaced to the web app when being served to the visitors*/}
      {/*"alt" should be as short yet informative as possible*/}
      <img src={logo} alt="charts and coins and money bag with dollar sign on it" />
      <h1>Investment Calculator</h1>
    </header>
  )
}

// as the header is a static component, and not dynamic, we could also have the <header> tag in the index.html file, but we want to keep the index.html file as clean as possible, and have all the JSX in the React components
