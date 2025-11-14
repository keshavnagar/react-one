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

so here in css first i created a parent div
in parent div i want to center the button 
for this i created this parent div
so first i give the full width and height to the parent div
for this i use  <div className="h-screen w-screen">
and than for verticaly center , i give  <div className="items-center">
and than for horizontal center , i give  <div className="justify-center">
for styling button i give <button className="bg-green-400 p-8">
here bg-green-400 is for color and p-8 is for padding 