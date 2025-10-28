the benefit of component is like we take an example suppose we want to 5 cards okay
like we take example as an app component
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
      <div>
        <div>
          <img src="st.jpg" alt="" />
        </div>
        <h1>Name: Stranger Things</h1>
        <h2>Rating: 8.5</h2>
        <p>
         Stranger Things is a science-fiction horror series about a group of friends in the 1980s who uncover supernatural events and secret government experiments in their small town
        </p>
      </div>
    </div>
  );
};
export default App;
so in this componenet we copy paste that code inside this component to getting 5 cards or 2 cards 
so i just copy paste same code its like html and css work 
but the key of react here is to just write code once in any component and reuse them
i also attached the image: [benefit of component](3beneOfComp.png)
now we optimize the code with the help of component 
now i make component here to paste all the code that i repeat here in sigle component in app.jsx 

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

ab app.jsx me jo mene likha hai div ke andar and same code hame show hora hai netflix component ko just call karke, hame same code mil raha hai

hame ek aur thing dhyan rakhni hai ki jab ham component banaye to pascal case use karna hai 
and sath hee yadi hame function jab ham banayenge to ham camel case use karenge
like jab ham us ek line ko copy karenge aur paste karenge to hame same code dikhega and one more thing is like code ko hamne optimize kar diya
isey hamne reusable kaha tha because ham us ek bar component ko define kar dete hai aur fir usey bar bar use kar sakte hai
