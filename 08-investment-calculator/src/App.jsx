import UserInput from "./components/UserInput"

function App() {
  return (
    <main id="user-input">
      <div>
        <ol id="user-input" className="input-group">
          <UserInput />
          <UserInput />
          <UserInput />
          <UserInput />
        </ol>
      </div>
    </main>
  )
}

export default App
