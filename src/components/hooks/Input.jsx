import { useState } from "react";
const Input = ({inputVal, setInputVal}) => {
 
  const inputFunction = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <>

      <input className="border-2"
        onChange={(e) => {
          inputFunction(e);
        }}
        placeholder="enter your name"
        type="text"
        value={inputVal}
      />
    </>
  );
};
export default Input;
