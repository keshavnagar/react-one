import { useState } from "react";

const ControlForm = () => {
  const [name, setname] = useState("");
  const handleInputName = (event) => {
    setname(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById(`inputName`).value;
    console.log(inputValue);
  };
  return (
    <section>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName">
          Name:{" "}
          <input
            id="inputName"
            type="text"
            value={name}
            onChange={handleInputName}
          />
        </label>
        <button type="submit">Submit</button>
        <h1>{name}</h1>
      </form>
    </section>
  );
};
export default ControlForm;
