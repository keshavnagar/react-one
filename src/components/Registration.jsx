import { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    firstName: "arjun",
    lastName: "sharma",
    email: "abcxyz9754@gmail.com",
    password: "12345",
    mobileNum: 1234567890,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "mobileNum":
        setMobileNum(value);
        break;
      default:
        alert("wrong option");
        break;
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      mobileNum,
    };
    console.log(user);
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
      <form className="flex flex-col gap-2" onSubmit={handleForm}>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInput}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInput}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </label>
        <label>
          Mobile Number:{" "}
          <input
            type="number"
            name="mobileNum"
            value={mobileNum}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
export default Registration;
