# derived state:

import { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "sheetal", age: 43 },
    { name: "mohan", age: 42 },
    { name: "arun", age: 33 },
  ]);
  const userCount = users.length;
  console.log(userCount);
  return (
    <>
      <h1>{userCount}</h1>
    </>
  );
};
export default DerivedState

const userCount = users.length; this state called derived state because it is depend on other state

we also find the average with the help of derived state

 let aveAge =
    users.reduce((acc, curr) => (acc = acc + curr.age), 0) / userCount;

    same thing with here , it is also a derived state , and derived state is like dependent on the other state and props, 
    it means if we change some thing in our parent state than it could be set again 