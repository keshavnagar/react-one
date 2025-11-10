import { useState } from "react";
const ObjectUseState = () => {
  const [users, setUsers] = useState([
    { name: "harsh", age: 12 },
    { name: "vishwas", age: 22 },
    { name: "raj", age: 32 },
    { name: "ajay", age: 23 },
    { name: "vikas", age: 19 },
      { name: "karina", age: 23 },
    { name: "akshat", age: 19 },
  ]);
  const [aveAge, setAveAge] = useState(0);
  const aveAgeCal = () => {
    let total = 0;
    users.map((user) => (total = total + user.age));
    setAveAge(total / users.length);
  };
  return (
    <>
      <h1>{aveAge}</h1>
      <button
        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
         hover:bg-blue-700 active:bg-blue-800
         transition-colors duration-200"
        onClick={aveAgeCal}
      >
        Find Average
      </button>
    </>
  );
};
export default ObjectUseState;
