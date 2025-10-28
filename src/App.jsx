import React from "react";
const App = () => {
  return (
    <div>
      <div>
        <div>
          <img src="qot.jpg" alt="" />
        </div>
        <h1>Name: Queen of tears</h1>
        <h2>Rating: 8.2</h2>
        <p>
          Queen of Tears is a K-drama about the marriage crisis of Hong Hae-in,
          the "queen" of Queens Group, and Baek Hyun-woo, a humble lawyer from a
          small village
        </p>
      </div>
      <NetflixCard />
      <NetflixCard />
      <div>
        <div>
          <img src="st.jpg" alt="" />
        </div>
        <h1>Name: Stranger Things</h1>
        <h2>Rating: 8.5</h2>
        <p>
          Stranger Things is a science-fiction horror series about a group of
          friends in the 1980s who uncover supernatural events and secret
          government experiments in their small town
        </p>
      </div>
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
