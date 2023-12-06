import React, { useState } from "react";
function LoginDataDisplay() {
  const [Username, setUsername] = useState("");
  const [display, setDispaly] = useState(false);

  function inputHandleChange(e) {
    setUsername(e.target.value);
  }
  function click() {
    setDispaly(true);
  }
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Username..."
        onChange={inputHandleChange}
      />
      {/* <input type="text" placeholder="Password..." /> */}
      <button onClick={click}>Login</button>
      {display && <h1>{Username}</h1>}
    </React.Fragment>
  );
}
export default LoginDataDisplay;
