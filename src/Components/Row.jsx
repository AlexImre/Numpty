import Box from "./Box"
import React from 'react';
import './Row.css';

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.isRowComplete = this.isRowComplete.bind(this);
    }

    isRowComplete() {
        const {
            guesses,
        } = this.props;
        if(typeof guesses.length === 'undefined' || guesses.length < 3){
            return false;
        }
        return true;
    }

    render() {
        const {
            rowID,
            correctCode,
            turn,
            guesses,
        } = this.props;

        return (
                <div className="boxContainer">
                    <Box 
                        correctCode={correctCode} 
                        place={0} 
                        guess={guesses[0]} 
                        updateColour={this.props.updateColour} 
                        turn={turn}
                        isRowComplete={this.props.rowComplete[rowID]}
                        />
                    <Box 
                        correctCode={correctCode} 
                        place={1} 
                        guess={guesses[1]} 
                        updateColour={this.props.updateColour} 
                        turn={turn}
                        isRowComplete={this.props.rowComplete[rowID]}
                        />
                    <Box 
                        correctCode={correctCode} 
                        place={2} 
                        guess={guesses[2]} 
                        updateColour={this.props.updateColour} 
                        rowComplete={this.props.rowComplete}
                        turn={turn}
                        isRowComplete={this.props.rowComplete[rowID]}
                        />
                </div>
        )
    }
}

export default Row;
