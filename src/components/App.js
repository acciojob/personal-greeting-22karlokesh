import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <label htmlFor="nameInput" style={{ display: "block", marginBottom: "8px", fontSize: "20px" }}>
        Enter your name:
      </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "18px",
          border: "2px solid black",
          borderRadius: "4px",
          width: "300px"
        }}
      />
      {name && (
        <h2 style={{ marginTop: "20px", fontSize: "24px" }}>
          Hello {name}!
        </h2>
      )}
    </div>
  );
}

export default App;
