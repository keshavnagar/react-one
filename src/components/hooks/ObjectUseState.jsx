const ObjectUseState = () => {
  const Users = [
    { name: "harsh", age: 12 },
    { name: "vishwas", age: 22 },
    { name: "vijay", age: 32 },
    { name: "ajay", age: 23 },
    { name: "vikas", age: 19 },
  ];
  return (
    <>
      <ul>
        {Users.map((user) => (
          <li>
            {user.name}-{user.age}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ObjectUseState;
