import React from "react";

const EventHandling = () => {
  const handleClick = (event) => {
    console.log(event);
    console.log("button clicked");
  };

  const handleUserClick = (user) => {
    console.log(`hello ${user}`);
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
        onClick={(event) => handleClick(event)}
        className="m-8 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow hover:shadow-lg hover:bg-indigo-700 transition"
      >
        Click Here click here
      </button>
      <button
        onClick={(event) => {
          console.log("hello this is :", event);
        }}
        className="m-8 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow hover:shadow-lg hover:bg-indigo-700 transition"
      >
        inline way clicking
      </button>
      <button
        onClick={() => {
          handleUserClick("ankit");
        }}
      >
        get user name
      </button>
    </>
  );
};

export default EventHandling;
