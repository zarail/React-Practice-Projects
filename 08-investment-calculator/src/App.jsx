import UserInput from "./components/UserInput"
import Header from "./components/Header"

function App() {
  return (
    <main>
      <Header />
      <div>
        <ol id="user-input">
          <div className="input-group">
            <UserInput
            label="Initial Investment"
            />
            <UserInput
            label="Annual Investment"
            />
          </div>
          <div className="input-group">
            <UserInput
            label="Expected Return"
            />
            <UserInput
            label="Duration"
            />
          </div>
        </ol>
      </div>
    </main>
  )
}

export default App
