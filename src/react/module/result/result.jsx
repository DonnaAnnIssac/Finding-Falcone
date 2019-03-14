import React from "react";

export default class Result extends React.Component {
    render() {
        return(
            <div>
                <div id="resultStatus">
                    {this.props.status}
                </div>
                <div id="foundInPlanet">
                    {this.props.planetName}
                </div>
            </div>
        );
    }
}