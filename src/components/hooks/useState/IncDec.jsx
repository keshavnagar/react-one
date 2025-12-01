import { useState } from "react";

const IncDec = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const handleStep = (e) => {
    setStep(Number(e.target.value));
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
        // value={step}
        onChange={(e) => handleStep(e)}
        type="number"
      />
      <button
        onClick={() => {
          setCount(count + step);
        }}
        disabled={count >= 100}
      >
        Inc
      </button>
      <button
        onClick={() => {
          setCount(count - step);
        }}
        disabled={count <= 0}
      >
        Dec
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </section>
  );
};
export default IncDec;
