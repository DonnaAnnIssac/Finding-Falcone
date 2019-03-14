import React from "react";
// import PlanetsContainer from "../planets/planets-container"
// import VehiclesContainer from "../vehicles/vehicles-container"
// import TimeContainer from "../time/time-container";
// import ResultContainer from "../result/result-container";
import Main from "./main";
import About from "./about";

class MainContainer extends React.Component {
  render() {
    return(
      <div className="mainContainer">
        <Main/>
      </div>
    )
  }
}

export default MainContainer;