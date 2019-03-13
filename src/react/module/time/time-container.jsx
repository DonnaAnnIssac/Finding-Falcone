import React from "react";

class TimeContainer extends React.Component {
    render() {
        const timeTakenDiv = this.props.display
            ? 
                <div>
                    <h4>Time Taken</h4>
                    {this.calculateTimeTaken()}
                </div>
            : ""
        return (
            <div className="timeContainer">
                {timeTakenDiv}
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