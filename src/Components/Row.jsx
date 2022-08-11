import Box from "./Box"
import React from 'react';
import './Row.css';

class Row extends React.Component {
    render() {
        const {
            rowID,
            correctCode,
            turn,
            guesses,
            rowComplete
        } = this.props;

        return (
                <div className="boxContainer">
                    <Box 
                        correctCode={correctCode} 
                        place={0} 
                        guess={guesses[0]} 
                        turn={turn}
                        isRowComplete={rowComplete[rowID]}
                        />
                    <Box 
                        correctCode={correctCode} 
                        place={1} 
                        guess={guesses[1]} 
                        turn={turn}
                        isRowComplete={rowComplete[rowID]}
                        />
                    <Box 
                        correctCode={correctCode} 
                        place={2} 
                        guess={guesses[2]} 
                        rowComplete={rowComplete}
                        turn={turn}
                        isRowComplete={this.props.rowComplete[rowID]}
                        />
                </div>
        )
    }
}

export default Row;
