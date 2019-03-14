import React from "react";
import PlanetsContainer from "./module/planets/planets-container"
import VehiclesContainer from "./module/vehicles/vehicles-container"
import TimeContainer from "./module/time/time-container";
import ResultContainer from "./module/result/result-container";
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets : [],
      selectedPlanet: null,
      vehicles : [],
      selectedVehicle: null,
      chosenPlanets: [],
      chosenVehicles: [],
      findFalcone: false,
      totalTime: 0,
    }
    this.onPlanetRowClick = this.onPlanetRowClick.bind(this);
    this.onVehicleRowClick = this.onVehicleRowClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    if (this.state.findFalcone) {
      return (
        <div className="mainContainer">
          <ResultContainer planets={this.state.chosenPlanets} vehicles={this.state.chosenVehicles}/>
        </div>
      )
    }
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
    const chosenPlanetsArr = this.state.chosenPlanets, chosenVehiclesArr = this.state.chosenVehicles;
    const tempPlanets = this.state.planets;
    /* disable selected planet from list, add selected planet to chosen planets array
      check if four planets have been chosen */
    tempPlanets.forEach((planet) => {
      if (planet.name === this.state.selectedPlanet.name) {
        planet.chosen = true;
        chosenPlanetsArr.push(planet);
      }
    });
    /* Decrement units count of selected vehicle from list,
      add selected vehicle to chosen vehicles array */
    const tempVehicles = this.state.vehicles;
    tempVehicles.forEach((vehicle) => {
      if (vehicle.name === this.state.selectedVehicle.name) {
        vehicle.total_no = vehicle.total_no - 1;
        chosenVehiclesArr.push(vehicle);
      }
    })
    // set state selectedPlanet and selectedVehicle to null
    this.setState({
      selectedPlanet : null,
      selectedVehicle : null,
      planets : tempPlanets,
      vehicles: tempVehicles,
      findFalcone: chosenPlanetsArr.length === 4 ? true : false,
      chosenPlanets: chosenPlanetsArr,
      chosenVehicles: chosenVehiclesArr,
    })
  }
}

export default MainContainer;