import { useState } from "react";

const ToggleProject = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <button
          className="bg-green-400 p-8 "
          onClick={() => setToggle(toggle === "off" ? "on" : "off")}
        >
          {toggle}
        </button>
      </div>
    </>
  );
};
export default ToggleProject;
