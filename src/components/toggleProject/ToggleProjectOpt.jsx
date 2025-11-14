import { useState } from "react";

const ToggleProjectOpt = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className={` h-50 w-50 p-2 ${toggle==="off"? `bg-red-400`: `bg-green-400`}`}
          onClickCapture={() => {
            setToggle(toggle === "off" ? "on" : "off");
            alert("parent");
          }}
        >
          <div className={`${toggle==="off" ? `bg-red-600` : `bg-green-600`}`}
            // onClickCapture={() => {
            //   setToggle(toggle === "off" ? "on" : "off");
            //   alert("child");
            // }}
          >
            <span>{toggle}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToggleProjectOpt;
