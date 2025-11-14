import { useState } from "react";

const ToggleProject = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <button
          className={`text-white flex p-2 w-50 items-center rounded-full ${
            toggle === "off" ? "bg-red-400" : "bg-green-400"
          }`}
          onClick={() => setToggle(toggle === "off" ? "on" : "off")}
        >
          <strong
            className={`p-4 w-25 h-25 flex justify-center items-center  text-3xl rounded-full transition-trasform duration-500 ${
              toggle === "off"
                ? "bg-red-600 text-red-200 translate-0 border-4 border-transparent"
                : "bg-green-600 text-green-200 translate-x-21 border-green-200 border-4"
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
