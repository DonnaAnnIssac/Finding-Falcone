import React from "react";
import PlanetsContainer from "./module/planets/planets-container"
import VehiclesContainer from "./module/vehicles/vehicles-container"
import TimeContainer from "./module/time/time-container";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets : [],
      selectedPlanet: null,
      vehicles : [],
      selectedVehicle: null,
      chosenPlanets: 0,
      findFalcone: false,
      totalTime: 0,
    }
    this.onPlanetRowClick = this.onPlanetRowClick.bind(this);
    this.onVehicleRowClick = this.onVehicleRowClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    if (!this.state.findFalcone) {
      return (
        <div className="mainContainer">
          <PlanetsContainer
            planetsArray={this.state.planets}
            selectedPlanet={this.state.selectedPlanet}
            onClick={this.onPlanetRowClick}
          />
          <VehiclesContainer
            display={this.state.selectedPlanet ? true : false}
            selectedVehicle={this.state.selectedVehicle}
            selectedPlanet={this.state.selectedPlanet}
            vehiclesArray={this.state.vehicles}
            onClick={this.onVehicleRowClick}
          />
          <TimeContainer
            display={this.state.selectedPlanet && this.state.selectedVehicle ? true : false}
            selectedPlanet={this.state.selectedPlanet}
            selectedVehicle={this.state.selectedVehicle}
            onClick={this.onButtonClick}
          />
        </div>
      );
    }
    return (
      <div className="mainContainer">
        <ResultContainer/>
      </div>
    )
  }

  componentDidMount() {
    this.fetchPlanets();
    this.fetchVehicles();
  }

  async fetchPlanets() {
    const planetsInfo = await fetch("https://findfalcone.herokuapp.com/planets");
    const planetsInfoJson = await planetsInfo.json();
    this.setState({
        planets: planetsInfoJson,
    })
  }

  async fetchVehicles() {
    const vehiclesInfo = await fetch("https://findfalcone.herokuapp.com/vehicles");
    const vehiclesInfoJson = await vehiclesInfo.json();
    this.setState({
        vehicles : vehiclesInfoJson,
    })
  }

  onPlanetRowClick(planetName) {
    const planet = this.state.planets.find(planet => planet.name === planetName)
    this.setState({
        selectedPlanet: planet,
        selectedVehicle: null,
    });
  }

  onVehicleRowClick(vehicleName) {
    const vehicle = this.state.vehicles.find(vehicle => vehicle.name === vehicleName)
    this.setState({
      selectedVehicle: vehicle
    });
  }

  onButtonClick() {
    let count = 0;
    // disable selected planet from list
    // check if four planets have been chosen
    const tempPlanets = this.state.planets;
    tempPlanets.forEach((planet) => {
      if (planet.chosen) {
        count ++;
      }
      if (planet.name === this.state.selectedPlanet.name) {
        planet.chosen = true;
        count ++;
      }
    });
    const tempVehicles = this.state.vehicles;
    tempVehicles.forEach((vehicle) => {
      if (vehicle.name === this.state.selectedVehicle.name) {
        vehicle.total_no = vehicle.total_no - 1;
      }
    })
    // set state selectedPlanet and selectedVehicle to null
    this.setState({
      selectedPlanet : null,
      selectedVehicle : null,
      planets : tempPlanets,
      vehicles: tempVehicles,
      findFalcone: count === 4 ? true : false,
    })
  }
}

export default MainContainer;