import { useState } from "react";

const ToggleProjectOpt = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div
        onClickCapture={() => {
          setToggle(toggle === "off" ? "on" : "off");
          alert("parent");
        }}
      >
        <div
          onClickCapture={() => {
            setToggle(toggle === "off" ? "on" : "off");
            alert("child");
          }}
        >
          <span>{toggle}</span>
        </div>
      </div>
    </>
  );
};
export default ToggleProjectOpt;
