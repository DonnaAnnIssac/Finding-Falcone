import "babel-polyfill";
import React from "react";
import Planet from "./planet";

class PlanetsContainer extends React.Component {
    render() {
        return (
            <div className="planetsContainer">
                <div>
                    {this.props.planetsArray.map((planetObj, index) => {
                        return (
                            <Planet
                                planetData={planetObj}
                                selected={this.props.selectedPlanet && this.props.selectedPlanet.name === planetObj.name
                                    ? true : false}
                                onClickHandler={this.props.onClick}
                                disable={planetObj.chosen}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PlanetsContainer;