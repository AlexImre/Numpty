import React from 'react';
import './HappyEnding.css';

class HappyEnding extends React.Component {

    render() {
        return (
            <div className="happyEndingContainer">
                <div className="finishMessage">
                    <p>Congrats! You beat Numpty in {this.props.turn} turn{this.props.turn === 1? "" : "s"}!</p>
                </div>
            </div>
        )
    }
}

export default HappyEnding;