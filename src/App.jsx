import React from "react";
import Practice from "./interview/Practice";
import NetflixCard, { Header, Footer } from "./components/NetflixCard";
// here i add netflix card outside because it is combo of both default and named import if i get error if i put the name exports outside the {} it give error same way if we add default export into {} so it also produce error, that's why we use in this way and it looks combination of both default and named components
const App = () => {
  return (
    <>
      <Header />
      <NetflixCard />
      <NetflixCard />
      <Footer />
      {/* <Practice/> */}
    </>
  );
};
export default App;
