import React from "react";

const EventHandling = () => {
  const handleClick = (event) => {
    console.log(event);
    console.log("button clicked");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="m-8 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow hover:shadow-lg hover:bg-indigo-700 transition"
      >
        Click Here
      </button>
      <button
        onClick={() => handleClick()}
        className="m-8 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow hover:shadow-lg hover:bg-indigo-700 transition"
      >
        Click Here click here
      </button>
    </>
  );
};

export default EventHandling;
