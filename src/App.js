import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import "./App.css";

function App() {
  const [input, setInput] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const changetype = () => {
    if (input === "password") {
      setInput("text");
      setIcon(eye);
    } else {
      setInput("password");
      setIcon(eyeOff);
    }
  };
  return (
    <div className="contanet">
      <div className="card">
        <input className="input" type={input}></input>
        <samp className="icon" onClick={changetype}>
          {" "}
          <Icon icon={icon} />{" "}
        </samp>
      </div>
    </div>
  );
}

export default App;
