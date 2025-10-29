import React from "react";
const App = () => {
  return (
    <div>
      <NetflixCard />
      <NetflixCard />
    </div>
  );
};
export default App;

const NetflixCard = () => {
  return (
    <div>
      <div>
        <img src="sabrina.jpg" alt="" />
      </div>
      <h1>Name: Chilling Adventures of Sabrina</h1>
      <h2>Rating: 8.9</h2>
      <p>
        Chilling Adventures of Sabrina is an American supernatural horror
        television series developed by Roberto Aguirre-Sacasa for Netflix
      </p>
    </div>
  );
};
