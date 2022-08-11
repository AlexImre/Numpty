import React from 'react';

class SadEnding extends React.Component {

    render() {
        return (
            <div className="happyEndingContainer">
                <div className="finishMessage">
                    <p>You Numpty! The correct code was {this.props.correctCode}!</p>
                </div>
            </div>
        )
    }
}

export default SadEnding;