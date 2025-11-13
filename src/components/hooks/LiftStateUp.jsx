import { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const LiftStateUp = () => {
     const [inputVal, setInputVal] = useState("");
  return (
    <>
      <Input inputVal={inputVal} setInputVal={setInputVal} />
      <Output inputVal={inputVal} />
    </>
  );
};

export default LiftStateUp;
