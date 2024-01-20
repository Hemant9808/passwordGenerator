import { useCallback, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var result = "";
  var [length,setlength] = useState(4);
  var [numberallowed, setnumberallowed] = useState(false);
  var [specialCharallowed, setspecialCharallowed] = useState(false);

  var [password, setpassword] = useState();

  var showpass = () => {
    if (numberallowed === true) string = string + "1234567890";
    if (specialCharallowed === true) {
      string = string + "!@#$%^&*()";
    }
    var characterLength = string.length;

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * characterLength);
      result = result + string.charAt(randomIndex);
    }
    setpassword(result);
  };

  return (
    <div className="App">
      <div className="inputpass space">
      <input id="password" type="text" placeholder="password" value={password} readOnly />
      <button  id="generate" type="button" class="btn btn-primary" onClick={showpass}>
        Generate
      </button>
      </div>
      <div className="feature">
      <button
      id="number"
        type="button"
        class="btn btn-primary space"
        onClick={() => {
          setnumberallowed((prev) => !prev);
          
        }}
       
      >
         Number
      </button>
      <button
      id="character"
        type="button"
        class="btn btn-primary space"
        onClick={() => {
          setspecialCharallowed((prev) => !prev);
          console.log(numberallowed);
        }}
      >
        Character
      </button>
      <select
        id="length"
        class="form-select form-select-lg mb-3 space"
        aria-label="Large select example"
        onChange={(e)=>setlength(e.target.value)}
      >
        
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </div>
      
    </div>
  );
}

export default App;
