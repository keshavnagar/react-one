import { useState } from "react";

const IncDec = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const handleStep = (e) => {
    setStep(parseInt(e.target.value));
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Use State Challenge</h1>
      <p>
        <span>Count</span>
        {count}
      </p>
      <label htmlFor="input">Enter Steps</label>
      <input
        id="input"
        onChange={(e) => handleStep(e)}
        value={step}
        type="number"
      />
      <button
        onClick={() => {
          count <= 100 - step ? setCount(count + step) : setCount(count);
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          count >= step ? setCount(count - step) : setCount(count);
        }}
      >
        Dec
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </section>
  );
};
export default IncDec;
