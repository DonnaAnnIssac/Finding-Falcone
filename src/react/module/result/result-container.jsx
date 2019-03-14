import "babel-polyfill";
import React from "react";
import Result from "./result"

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            foundInPlanet: "",
        }
    }
    render() {
        return(
            <div>
                <Result status={this.state.status} planetName={this.state.foundInPlanet}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchResults();
    }

    async fetchResults() {
        const token = await fetch("https://findfalcone.herokuapp.com/token", {
            method: "POST",
            headers: {
                "Accept" : "application/json",
            },
            body: JSON.stringify({})
        });
        const tokenJson = await token.json();
        const planetNames = this.props.planets.map((planet) => planet.name);
        const vehicleNames = this.props.vehicles.map((vehicle) => vehicle.name);
        const result = await fetch("https://findfalcone.herokuapp.com/find", {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "token" : tokenJson.token,
                "planet_names" : planetNames,
                "vehicle_names" : vehicleNames,
            })
        })
        const resultJson = await result.json();
        this.setState({
            status: resultJson.status === "false" ? "Failure" : "Success",
            foundInPlanet: resultJson.planet_name,
        })
    }
}