import React from "react";

const EventHandling = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log("hello onClick");
        }}
        className="m-8 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow hover:shadow-lg hover:bg-indigo-700 transition"
      >
        Click Here
      </button>
    </>
  );
};

export default EventHandling;
