import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const Parent = () => {
  console.log("parent");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Parent</h1>
      <h1>{count}</h1>
      <button className="bg-amber-300" onClick={() => setCount(count + 1)}>Increase</button>
      <Child1 />
      <Child2 />
    </>
  );
};
export default Parent;
