import React from "react";

class Planet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.selected ? "selectedPlanetRow" : "planetRow"} id={this.props.planetData.name} onClick={(e) => {this.onClick(e)}}>
                <div className="planetName">
                    Name: {this.props.planetData.name}
                </div>
                <div className="planetDistance">
                    Distance: {this.props.planetData.distance}
                </div>
            </div>
        );
    }

    onClick(event) {
        console.log(event.target.id);
        this.props.onClickHandler(event.target.id);
    }
}

export default Planet;