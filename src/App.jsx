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
  const rating = 8.9;
  const summary =
    "Chilling Adventures of Sabrina is an American supernatural horror television series developed by Roberto Aguirre-Sacasa for Netflix";
  return (
    <div>
      <div>
        <img src="sabrina.jpg" alt="" />
      </div>
      <h1>Name: {name}</h1>
      <h2>Rating: {rating}</h2>
      <p>{summary}</p>
    </div>
  );
};
