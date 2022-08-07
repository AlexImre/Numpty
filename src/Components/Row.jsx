import Box from "./Box"
import React from 'react';
import './Row.css';

class Row extends React.Component {

    render() {
        const {
            correctCode,
            turn,
            guesses,
        } = this.props;

        return (
                <div className="boxContainer">
                    <Box correctCode={correctCode} place={0} guess={guesses[0]} />
                    <Box correctCode={correctCode} place={1} guess={guesses[1]} />
                    <Box correctCode={correctCode} place={2} guess={guesses[2]} />
                </div>
        )
    }
}

export default Row;
