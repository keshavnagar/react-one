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
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <h2>Rating: {6+2.1}</h2>
      <p>{summary}</p>
    </div>
  );
};
