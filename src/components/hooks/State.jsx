import { useState } from "react";

const State = () => {
  console.log(useState())
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increament
        </button>
      </div>
    </>
  );
};
export default State;
