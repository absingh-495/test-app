import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [post, setPost] = React.useState(null);
  const data = localStorage.getItem("studentRecord");
  console.log(data);

  const [name, setName] = useState("");
  const [mobileNumner, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [eNumber, setENumber] = useState("");
  const [studentsAddress , stdAddress] = useState("");
  const [studentsRecords, setStudent] = useState([]);

  const onSubmit = () => {
    let jsonData = {
      name: name,
      mobile: mobileNumner,
      email: email,
      eNumber: eNumber,
      studentsAddress:stdAddress,
    };
    studentsRecords.push(jsonData);
    setStudent(studentsRecords);
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
          <br></br>
          <div>
            <label>
              Student Phone Number :
              <input
                value={mobileNumner}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label>
              Student Email :
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label></label>
            {"Student En. Number "}
            <input
              value={eNumber}
              onChange={(e) => setENumber(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label></label>
            {"StdAddress"}
            <input
              value={stdAddress}
              onChange={(e) =>stdAddress(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <button onClick={onSubmit}>submit</button>
          </div>

          <br></br>
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>email</th>
                <th>eNumber </th>
                <th>stdAddress </th>
              </tr>
              {studentsRecords.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.mobile}</td>
                    <td>{val.email}</td>
                    <td>{val.eNumber}</td>
                    <td>{val.stdAddress}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;