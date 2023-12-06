import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid library to generate unique IDs

function InputData() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [display, setDisplay] = useState(false);
  const [dataList, setDataList] = useState([]);

  function handleFirstChange(e) {
    setFname(e.target.value);
  }

  function handleLastChange(e) {
    setLname(e.target.value);
  }

  function click(e) {
    e.preventDefault();
    const newData = { id: uuidv4(), fname, lname }; // Assign a unique ID to each data item
    setDataList([...dataList, newData]);
    setFname(""); // Clear input fields after adding data
    setLname("");
    setDisplay(true);
  }

  function handleCancel(id) {
    const updatedDataList = dataList.filter((data) => data.id !== id);
    setDataList(updatedDataList);
  }

  function handleClear() {
    setFname(""); // Clear fname state
    setLname(""); // Clear lname state
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <label>FirstName:</label>
      <input type="text" value={fname} onChange={handleFirstChange} />
      <br />
      <label>LastName:</label>
      <input type="text" value={lname} onChange={handleLastChange} />
      <br />
      <button type="submit" onClick={click}>
        Add
      </button>
      <button type="reset" onClick={handleClear}>
        Clear
      </button>
      <br />
      <br />
      <p>
        {display &&
          dataList.map((data) => (
            <div key={data.id}>
              <h1>
                {data.fname} {data.lname}
                <button onClick={() => handleCancel(data.id)}>❌</button>
              </h1>
            </div>
          ))}
      </p>
    </form>
  );
}

export default InputData;
