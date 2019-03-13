import React from "react";

class TimeContainer extends React.Component {
    render() {
        return (
            <div className="timeContainer">
                <h4>Time Taken</h4>
                {this.calculateTimeTaken()}
            </div>
        );
    }

    calculateTimeTaken() {
        return this.props.selectedPlanet && this.props.selectedVehicle
        ? this.props.selectedPlanet.distance / this.props.selectedVehicle.speed
        : 0;
    }
}

export default TimeContainer;