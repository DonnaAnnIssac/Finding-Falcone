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
    }
    this.onPlanetRowClick = this.onPlanetRowClick.bind(this);
    this.onVehicleRowClick = this.onVehicleRowClick.bind(this);
  }
  render(){
    return(
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
}

export default MainContainer;