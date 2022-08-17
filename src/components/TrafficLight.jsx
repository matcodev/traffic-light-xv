import React from "react";


export default class TrafficLigth extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: null
        }
    }
    render() {
        let redClass = this.state.clicked === 'red' ? 'selected' : ''
        let yellowClass = this.state.clicked === 'yellow' ? 'selected' : ''
        let greenClass = this.state.clicked === 'green' ? 'selected' : ''

        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className= {`light red ${redClass}`} onClick={() => this.setState({ clicked: 'red' })}></div>
                <div className= {`light yellow ${yellowClass}`} onClick={() => this.setState({ clicked: 'yellow' })}></div>
                <div className= {`light green ${greenClass}`} onClick={() => this.setState({ clicked: 'green' })}></div>
            </div>
        </div>
    }
}