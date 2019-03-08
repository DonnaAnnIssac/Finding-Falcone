import React from "react";
import PlanetsContainer from "./module/planets/planets-container"
import VehiclesContainer from "./module/vehicles/vehicles-container"
import TimeContainer from "./module/time/time-container";

class MainContainer extends React.Component{
  render(){
    return(
      <div className="mainContainer">
        <h3> Hello, World! </h3>
        <PlanetsContainer />
        <VehiclesContainer />
        <TimeContainer />
      </div>
    );
  }
}

export default MainContainer;