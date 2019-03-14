import React from "react";

class TimeContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            timeTaken: 0,
            totalTime: 0
        }
    }
    render() {
        if (this.props.display) {
            return (
                <div className="timeContainer">
                    <div>
                        <h4>Time Taken</h4>
                        {this.state.timeTaken}
                        <div>
                            <button onClick={(e) => this.onClick(e)}>Select</button>
                        </div>
                        <h4>Total Time</h4>
                        {this.state.totalTime}
                    </div>
                </div>
            )
        }
        return (
            <div className="timeContainer">
            </div>
        )            
    }
    
    componentWillReceiveProps(nextProps) {
        this.calculateTimeTaken(nextProps);
    }

    calculateTimeTaken(props) {
        const time = props.selectedPlanet && props.selectedVehicle
        ? props.selectedPlanet.distance / props.selectedVehicle.speed
        : 0;
        const totalTimeTaken = this.state.totalTime;
        this.setState({
            timeTaken: time,
            totalTime: totalTimeTaken + time,
        });
    }

    onClick(e) {
        this.props.onClick();
    }
}

export default TimeContainer;