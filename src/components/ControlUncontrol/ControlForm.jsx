const ControlForm = () => {
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
          Name: <input id="inputName" type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default ControlForm;
