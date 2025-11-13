const Output = ({ inputVal }) => {
  return (
    <>
      <h1>
        The current input value is :{" "}
        <strong className="bg-amber-200">{inputVal}</strong>{" "}
      </h1>
    </>
  );
};
export default Output;
