import React from 'react';
import './Box.css';

class Box extends React.Component {
    getColor(correctCode, guess, place, isRowComplete) {        
            let colour = '',
            isCorrectNum = correctCode.includes(guess),
            isCorrectPlace = isCorrectNum && correctCode[place] === guess;
            if(isRowComplete){
                if (isCorrectPlace) {
                    colour = 'green';
                } else if (isCorrectNum) {
                    colour = 'amber';
                } else {
                    colour = 'grey'
                }
                return colour;
            }
        }

    render() {
        const {
            correctCode,
            guess,
            place,
            turn,
            isRowComplete
        } = this.props;

        return (
            <div className={`box ${this.getColor(correctCode, guess, place, isRowComplete, turn)}`}>{guess}</div>
        )
    }
}

export default Box;