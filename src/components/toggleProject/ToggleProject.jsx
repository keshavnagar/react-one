import { useState } from "react";

const ToggleProject = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <button onClick={() => setToggle(toggle === "off" ? "on" : "off")}>
        {toggle}
      </button>
    </>
  );
};
export default ToggleProject;
