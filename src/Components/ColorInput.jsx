import React, { useState } from "react";

function ColorInput() {
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("");

  const handleColorChange = (event) => {
    // Get the value entered in the second input box
    // const colorName = event.target.value;

    // Update the color state with the entered color name
    setColor(event.target.value);
  };
  const click = (e) => {
    e.preventDefault();
    setDisplay(color);
  };

  return (
    <form onSubmit={click}>
      <input
        type="text"
        placeholder="Enter color name"
        onChange={handleColorChange}
      />
      <input
        type="text"
        style={{ backgroundColor: display }}
        value={""}
        // placeholder="Color Preview"
      />
      <button>submit</button>
    </form>
  );
}

export default ColorInput;
