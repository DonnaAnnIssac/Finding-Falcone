import React from "react";
import Vehicle from "./vehicle";

class VehiclesContainer extends React.Component {
    render() {
        const vehiclesDiv = this.props.display
        ?
            <div>
                {this.props.vehiclesArray.map((vehicleObj, index) => {
                    return (
                        <Vehicle
                            vehicleData={vehicleObj}
                            disable={
                                (this.props.selectedPlanet.distance > vehicleObj.max_distance) || vehicleObj.total_no === 0
                                ? true
                                : false
                            }
                            selected={this.props.selectedVehicle && this.props.selectedVehicle.name === vehicleObj.name
                                ? true : false}
                            onClickHandler={this.props.onClick}
                            key={index}
                        />
                    )
                })}
            </div>
        : ""
        return (
            <div className="vehiclesContainer">
                {/* <h4>Vehicles Container</h4> */}
                {vehiclesDiv}
            </div>
        );
    }
}

export default VehiclesContainer;