import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./characters";

const copy_message = {
  COPY_SUCCESS: "Password successfully copied to clipboard",
  COPY_Fail: "Password successfully copied to clipboard",
};

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setincludeUpperCase] = useState(false);
  const [includeLowerCase, setincludeLowerCase] = useState(false);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setincludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("To generate password you must select atleast on checkbox", true);
      // console.log("something")
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }

      setPassword(createPassword(characterList));
      notify("Password is generated successfully", false);
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const charaterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * charaterListLength);
      password = password + characterList.charAt(characterIndex);
    }

    return password;
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const notify = (message, hasError) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCopyPassword = (e) => {
    if (password === "") {
      notify(copy_message.COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(copy_message.COPY_SUCCESS);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h1 className="generator_heading">Password Generator</h1>
          <div className="generator_password">
            <h3>{password}</h3>
            <button className="copy_btn" onClick={handleCopyPassword}>
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
              defaultValue={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value);
              }}
            />
          </div>

          <div className="form_group">
            <label htmlFor="uppercase-letters">Add Uppercase letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
              checked={includeUpperCase}
              onChange={(e) => {
                setincludeUpperCase(e.target.checked);
              }}
            />
          </div>

          <div className="form_group">
            <label htmlFor="lowercase-letters">Add Lowercase letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
              checked={includeLowerCase}
              onChange={(e) => {
                setincludeLowerCase(e.target.checked);
              }}
            />
          </div>

          <div className="form_group">
            <label htmlFor="include-numbers">Include numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
              checked={includeNumbers}
              onChange={(e) => {
                setincludeNumbers(e.target.checked);
              }}
            />
          </div>

          <div className="form_group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
              checked={includeSymbols}
              onChange={(e) => {
                setincludeSymbols(e.target.checked);
              }}
            />
          </div>
          <button className="generator_btn" onClick={handleGeneratePassword}>
            Generate Password
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
