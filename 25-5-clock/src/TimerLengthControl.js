import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TimerLengthControl extends React.Component {
    render() {
        return (
        <div className="length-control">
            <div id={this.props.titleID}>{this.props.title}</div>
            <button
                className="btn-level"
                id={this.props.minID}
                onClick={this.props.onClick}
                value="-"
            >
            <FontAwesomeIcon icon="fas fa-arrow-down" size="2x" />
            </button>

            <div className="btn-level" id={this.props.lengthID}>
                {this.props.length}
            </div>

            <button
                className="btn-level"
                id={this.props.addID}
                onClick={this.props.onClick}
                value="+"
            >
                <FontAwesomeIcon icon="fas fa-arrow-up" size="2x" />
            </button>
        </div>
        );
    }
}

export default TimerLengthControl;