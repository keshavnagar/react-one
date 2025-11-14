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

import { useState } from "react";

const ToggleProject = () => {
  const [toggle, setToggle] = useState("off");
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <button
          className={`text-white flex  w-50 items-center ${
            toggle === "off"
              ? "bg-red-400 justify-start"
              : "justify-end bg-green-400"
          }`}
          onClick={() => setToggle(toggle === "off" ? "on" : "off")}
        >
          <strong
            className={`p-4 w-25 text-white ${
              toggle === "off" ? "bg-red-600" : "bg-green-600"
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

so in this project i use usestate and design the whole style with the help of state variable
so first thing i understand here is the strong i use in the button and give width to the button and flex them 
and than same justify these items conditionally 
for toggle on its to the end and if toggle is off its start 
same with the bg color i change with the help of that 
and also i use {} inside {} for js inside js for first i use {} becuase of i want to use the use state variable and second is use the state variable inside string type things because some of the design or styles are common so i use `` and inside it i use {}
we also add borders to both like i add that thing
i dont use padding in the button i just use the padding inside the strong for looking cool ui
now i add the border radius