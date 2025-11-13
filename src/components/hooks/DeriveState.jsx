import { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "sheetal", age: 43 },
    { name: "mohan", age: 42 },
    { name: "arun", age: 33 },
    { name: "abhishek", age: 52 },
  ]);
  const userCount = users.length;
  let aveAge =
    users.reduce((acc, curr) => (acc = acc + curr.age), 0) / userCount;
  console.log(userCount);
  return (
    <>
      <h1>{userCount}</h1>
      <h1>{aveAge}</h1>
    </>
  );
};
export default DerivedState;
