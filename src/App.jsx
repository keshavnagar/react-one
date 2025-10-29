import React from "react";
const App = () => {
  return (
    <>
      <NetflixCard />
      <NetflixCard />
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
  const age = 117;
  // const canWatch = "not available";
  // if (age >= 18) canWatch = "watch now";
  // const canWatch = age >= 18 ? "watch now" : "not available";
  const canWatch = () => {
    return age >= 18 ? "watch" : "not avaiable";
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
