import React from "react";

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleTotalQty : this.props.vehicleData.total_no,
            vehicleCurrentQty : this.props.vehicleData.total_no,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.selected) {
            this.setState({
                vehicleCurrentQty : nextProps.vehicleData.total_no,
            })
        }
    }

    render() {
        return (
            <div
                className={
                    this.props.disable
                    ? "vehicleRow disabledVehicleRow " 
                    : this.props.selected
                        ? "vehicleRow selectedVehicleRow"
                        : "vehicleRow"
                } 
                id={this.props.vehicleData.name}
                onClick={(e) => {this.onClick(e)}}
                disabled={this.props.disable}
            >
                <div className="vehicleName">
                    {this.props.vehicleData.name.toUpperCase()}
                </div>
                <div className="vehicleDistance">
                    Max Distance: {this.props.vehicleData.max_distance} megamiles
                </div>
                <div className="vehicleSpeed">
                    Speed: {this.props.vehicleData.speed} megamiles/hour
                </div>
                <div className="vehicleQuantity">
                    Units: {this.props.selected ? this.state.vehicleCurrentQty : this.props.vehicleData.total_no}
                </div>
            </div>
        )
    }

    onClick(event) {
        this.props.onClickHandler(event.target.id);
        this.setState({
            vehicleCurrentQty: this.state.vehicleCurrentQty - 1,
        })
    }
}

export default Vehicle;