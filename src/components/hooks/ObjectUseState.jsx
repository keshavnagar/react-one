import { useState } from "react";
const ObjectUseState = () => {
  const [users, setUsers] = useState([
    { name: "harsh", age: 12 },
    { name: "vishwas", age: 22 },
    { name: "raj", age: 32 },
    { name: "ajay", age: 23 },
    { name: "vikas", age: 19 },
  ]);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li>
            {user.name}-{user.age}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ObjectUseState;
