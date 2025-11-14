import { useState } from "react";

const ToggleProject = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <button
          className={`text-white flex p-2 w-50 items-center rounded-full ${
            toggle === "off"
              ? "bg-red-400 justify-start"
              : "justify-end bg-green-400"
          }`}
          onClick={() => setToggle(toggle === "off" ? "on" : "off")}
        >
          <strong
            className={`p-4 w-25 h-25 flex justify-center items-center  text-3xl rounded-full ${
              toggle === "off" ? "bg-red-600 text-red-200" : "bg-green-600 text-green-200"
            }`}
          >
            {toggle}
          </strong>
        </button>
      </div>
    </>
  );
};
export default ToggleProject;
