import { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState("");
  //const [display, setDisplay] = useState("");

  function handleColorChange(e) {
    console.log(e.target.value);
    setColor(e.target.value);
  }
  // function click(e) {
  //   e.preventDefault();
  //   setColor(color);
  // }
  return (
    <form>
      <input
        type="text"
        placeholder="Enter the color name"
        onChange={handleColorChange}
      />
      <input type="text" style={{ background: color }} />
      <button>change</button>
    </form>
  );
}
export default ColorBox;
