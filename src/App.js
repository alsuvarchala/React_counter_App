import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1> Counter App </h1>
      <p className="count">Count: {count}</p>
      <div className="buttons">
        <button className="btn add" onClick={() => setCount(c => c + 1)}>
          ➕ Increase
        </button>
        <button className="btn sub" onClick={() => setCount(c => c - 1)}>
          ➖ Decrease
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default App;
