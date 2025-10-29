import React from "react";
import Practice from "./interview/Practice";
const App = () => {
  return (
    <>
      {/* <NetflixCard />
      <NetflixCard /> */}
      <Practice/>
    </>
  );
};
export default App;

const NetflixCard = () => {
  const name = " Chilling Adventures of Sabrina";
  const rating = 8.99;
  const summary =
    "Chilling Adventures of Sabrina is an American supernatural horror television series developed by Roberto Aguirre-Sacasa for Netflix";
  const image = "sabrina.jpg";
  const returnGenre = () => {
    const genre = "horror";
    return genre;
  };
  const age = 17;
  // const canWatch = "not available";
  // if (age >= 18) canWatch = "watch now";
  // const canWatch = age >= 18 ? "watch now" : "not available";
  const canWatch = () => {
    // return age >= 18 ? "watch" : "not avaiable";
    if (age >= 18) return "watch";
     return "not available";
  };
  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <h2>Rating: {6 + 2.1}</h2>
      <p>{summary}</p>
      <p>{returnGenre()}</p>
      {/* <button>{age >= 18 ? "watch" : "not watch"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </>
  );
};
