import React, { useState } from "react";

function DropdownWithMessage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Define messages for each option
    const messages = {
      option1: "You selected Option 1!",
      option2: "You chose Option 2!",
      option3: "Option 3 is your selection!",
    };

    // Set the message based on the selected option
    setMessage(messages[selectedValue] || "");
  };

  return (
    <div>
      <select onChange={handleOptionChange} value={selectedOption}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DropdownWithMessage;
