import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const newName = (e) => {
    setName(e.target.value);
  };
  const newEmail = (e) => {
    setEmail(e.target.value);
  };
  const newMessage = (e) => {
    setMessage(e.target.value);
  };

  const click = (e) => {
    e.preventDefault();
    alert(name);
    alert(email);
    alert(message);
  };

  return (
    <form onSubmit={click}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={newName}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={newEmail}
      />
      <label htmlFor="name">Message:</label>
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
export default Input;
