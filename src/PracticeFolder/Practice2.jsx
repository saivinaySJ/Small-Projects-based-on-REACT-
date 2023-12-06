import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

function Practice2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const newName = function (e) {
    setName(e.target.value);
  };
  const newEmail = function (e) {
    setEmail(e.target.value);
  };
  const newMessage = function (e) {
    setmessage(e.target.value);
  };

  function click(e) {
    e.preventDefault();
    alert(`Name: ${name}`);
    alert(`Email: ${email}`);
    alert(`Message: ${message}`);
  }
  return (
    <form onSubmit={click}>
      <label>Name:</label>
      <input
        type="text"
        name="text"
        id="text"
        value={name}
        onChange={newName}
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={newEmail}
      />
      <label>Message:</label>
      <input
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={newMessage}
      />
      <input type="submit" />
    </form>
  );
}
export default Practice2;
