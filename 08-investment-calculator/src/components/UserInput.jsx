export default function UserInput() {
  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value="0"
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value="0"
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          required
          value="0"
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value="0"
        />
      </p>
    </div>
  </section>
}

// the <section> includes two divs, each with two paragraphs marked with class "input-group"
