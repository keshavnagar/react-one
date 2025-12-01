import { useState } from "react";

const Registration = () => {
  //   const [user, setUser] = useState({
  //     firstName: "arjun",
  //     lastName: "sharma",
  //     email: "abcxyz9754@gmail.com",
  //     password: "12345",
  //     mobileNum: 1234567890,
  //   });

  const [firstName, setFirstName] = useState("arjun");
  const [lastName, setLastName] = useState("sharma");
  const [email, setEmail] = useState("abcxyz9754@gmail.com");
  const [password, setPassword] = useState("12345");
  const [mobileNum, setMobileNum] = useState("1234567890");
  //   const handleForm = () => {
  //     setUse(user.firstName)
  //   }
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleMobileNum = (e) => {
    setMobileNum(e.target.value);
  };
  return (
    <>
      <p>
        My name is
        <span className="text-red-500">
          {firstName} {lastName}
        </span>
        , email is <span className="text-red-500">{email} </span> and mobile
        number is
        <span className="text-red-500">{mobileNum}</span>
      </p>
      <form className="flex flex-col gap-2">
        <label>
          First Name:{" "}
          <input type="text" value={firstName} onChange={handleFirstName} />
        </label>
        <label>
          Last Name:{" "}
          <input type="text" value={lastName} onChange={handleLastName} />
        </label>
        <label>
          Email: <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          Password:{" "}
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <label>
          Mobile Number:{" "}
          <input type="number" value={mobileNum} onChange={handleMobileNum} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
export default Registration;
