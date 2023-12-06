import React from "react";
import { useState } from "react";
function IncrementDecrement() {
  const [count, setCount] = useState(0);
  const decHandleChange = () => {
    setCount(count - 1);
  };
  const incHandleChange = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={decHandleChange}>DNC</button>
      <span>{count}</span>
      <button onClick={incHandleChange}>INC</button>
    </div>
  );
}
export default IncrementDecrement;
