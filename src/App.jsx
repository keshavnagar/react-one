import React from "react";
import Practice from "./interview/Practice";
import NetflixSeries from "./components/NetflixSeries";
import Profile from "./interview/Profile";
import "./index.css";
import EventHandling from "./components/EventHandling";
import EventProps from "./components/EventProps";
import EventPropagation from "./components/EventPropagation";
import State from "./components/hooks/State";
import Parent from "./components/hooks/Parent";
import Sibling from "./components/hooks/Sibling";
import ObjectUseState from "./components/hooks/ObjectUseState";
import DeriveState from "./components/hooks/DeriveState"
import LiftStateUp from "./components/hooks/LiftStateUp";
import ToggleProject from "./components/toggleProject/toggleProject";
import ToggleProjectOpt from "./components/toggleProject/ToggleProjectOpt";
// here i add netflix card outside because it is combo of both default and named import if i get error if i put the name exports outside the {} it give error same way if we add default export into {} so it also produce error, that's why we use in this way and it looks combination of both default and named components
const App = () => {
  return (
    <>
      {/* <Profile /> */}
      {/* <section className="container">
        <NetflixSeries />
      </section> */}
      {/* <Practice/> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <Parent />
      <Sibling /> */}
      {/* <ObjectUseState/> */}
      {/* <DeriveState/> */}
      {/* <LiftStateUp/> */}
      {/* <ToggleProject/> */}
      <ToggleProjectOpt/>
    </>
  );
};
export default App;
