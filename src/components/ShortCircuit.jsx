import { useState } from "react";

const ShortCircuit = () => {
  const [login, setLogin] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    const result = toggle ? "please log in" : "you are logged in";
    setLogin(result);
    setToggle(!toggle);
  };
  return (
    <section className="text-2xl w-screen h-screen flex flex-col justify-center items-center gap-5  bg-[#E7E247] text-[#3D3B30]">
      <h1>welcome to the ShortCircuit Evaluation</h1>
      <p>{login}</p>
      <p>you are logged in</p>
      <div className="flex gap-10">
        <button
          onClick={() => handleToggle()}
          className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer rounded-2xl"
        >
          Toggle Login State
        </button>
        <button className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer  rounded-2xl">
          Set User
        </button>
        <button className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer  rounded-2xl">
          Clear User
        </button>
      </div>
    </section>
  );
};
export default ShortCircuit;
