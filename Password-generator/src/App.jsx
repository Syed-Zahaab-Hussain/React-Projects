import React, { useState } from "react";
import './App.css'

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h1 className="generator_heading">Password Generator</h1>
          <div className="generator_password">
            <h3>{password}</h3>
            <button className="copy_btn">
              <img src="/clipboard.svg" alt="Clipboard icon" />
            </button>
          </div>

          <div className="form_group">
            <label htmlFor="password-strength">Password length</label>
            <input
              type="number"
              id="password-strength"
              name="password-strength"
              min="8"
              max="26"
            />
          </div>

          <div className="form_group">
            <label htmlFor="uppercase-letters">Add Uppercase letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            />
          </div>

          <div className="form_group">
            <label htmlFor="lowercase-letters">Add Lowercase letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            />
          </div>
          
          <div className="form_group">
            <label htmlFor="include-numbers">Include numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>
         
          <div className="form_group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <button className="generator_btn">Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
