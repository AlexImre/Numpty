import React from 'react';
import './Box.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getColor(correctCode, guess, place, isRowComplete) {        
            let colour = '',
            isCorrectCode = correctCode.includes(guess),
            isCorrectPlace = isCorrectCode && correctCode[place] === guess;

            if(isRowComplete){
                if (isCorrectPlace) {
                    colour = 'green';
                } else if (isCorrectCode) {
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

// right num right place
// if Guess = correctCode & place --> Green
// if Guess = correctCode & not place --> amber
// if Guess not in correctCode --> Grey     


// right num wrong place