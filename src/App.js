import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  
  const data = localStorage.getItem("studentRecord");
  console.log(data);

  const [name, setName] = useState("");
  const [mobileNumner, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [eNumber, setENumber] = useState("");
  const [studentsRecords, setStudent] = useState([]);
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem("studentRecord");
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  };
  const onSubmit = () => {
    let jsonData = [
      { name: name, mobile: mobileNumner, email: email, eNumber: eNumber },
    ];
    console.log(loadState());

    const remoteData = loadState();

    remoteData.push(jsonData);
    setStudent(remoteData);
    console.log(remoteData);
    localStorage.setItem("studentRecord", remoteData);

    console.log(loadState());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>
            <label>
              Student Name :
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>{" "}
          </div>
          <div>
            <label>
              Student Phone Number :
              <input
                value={mobileNumner}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>{" "}
          </div>
          <div>
            <label>
              Student Email :
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>{" "}
          </div>
          <div>
            <label></label>
            {"Student En. Number "}
            <input
              value={eNumber}
              onChange={(e) => setENumber(e.target.value)}
            />
          </div>

          <div>
            <button onClick={onSubmit}>submit</button>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;