import React from 'react';
import './Box.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getColor(correctCode, guess, place, rowComplete, turn) {        
            if (!this.props.isRowComplete()) {
                return;
            }
            let colour = '';
            let isCorrectCode = correctCode.includes(guess);
            let isCorrectPlace = isCorrectCode && correctCode[place] === guess;
    
            if (isCorrectPlace) {
                colour = 'green';
            } else if (isCorrectCode) {
                colour = 'amber';
            } else {
                colour = 'grey'
            }
            return colour;
        }


    renderColors(correctCode, guess, place, rowComplete, turn) {
        if (rowComplete[1]){
            return this.getColor(correctCode, guess, place, rowComplete, turn)
        }
        if (rowComplete[1] && rowComplete[2]){
            return this.getColor(correctCode, guess, place, rowComplete, turn)
        }
    }



    render() {
        const {
            correctCode,
            guess,
            place,
            turn,
            rowComplete
        } = this.props;

        return (
            <div className={`box ${this.renderColors(correctCode, guess, place, rowComplete, turn)}`}>{guess}</div>
        )
    }
}

export default Box;

// right num right place
// if Guess = correctCode & place --> Green
// if Guess = correctCode & not place --> amber
// if Guess not in correctCode --> Grey     


// right num wrong place