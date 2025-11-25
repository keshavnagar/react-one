import { useState } from "react";

const ShortCircuit = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  return (
    <section className="text-2xl w-screen h-screen flex flex-col justify-center items-center gap-5  bg-[#E7E247] text-[#3D3B30]">
      <h1>welcome to the ShortCircuit Evaluation</h1>
      {isLogin && <p>you are logged in</p>}
      {user ? <p>you are logged in {`${user}`}</p> : <p>please login</p>}
      <div className="flex gap-10">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer rounded-2xl"
        >
          Toggle Login State
        </button>
        <button
          onClick={() => setUser("arijit")}
          className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer  rounded-2xl"
        >
          Set User
        </button>
        <button
          onClick={() => {
            setUser("");
          }}
          className="bg-[#3D3B30] text-[#E7E247] p-3 cursor-pointer  rounded-2xl"
        >
          Clear User
        </button>
      </div>
    </section>
  );
};
export default ShortCircuit;
