import React from "react";

class Planet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                className={
                    this.props.disable
                    ? "planetRow disabledPlanetRow"
                    : this.props.selected
                        ? "planetRow selectedPlanetRow"
                        : "planetRow"}
                id={this.props.planetData.name}
                onClick={(e) => {this.onClick(e)}}
            >
                <div className="planetName">
                    {this.props.planetData.name.toUpperCase()}
                </div>
                <div className="planetDistance">
                    Distance: {this.props.planetData.distance} megamiles
                </div>
            </div>
        );
    }

    onClick(event) {
        this.props.onClickHandler(event.target.id);
    }
}

export default Planet;