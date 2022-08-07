/* box
 props: 

 

 */

import React from 'react';
import './Box.css';

class Box extends React.Component {


    getColor(correctCode, guess, place) {
        /*
        correctCode = [5,3,2]; 
        guess = 5;
        place = 0; ...possible to be 0,1,2
        */

        let colour = 'grey';
        let isCorrectCode = correctCode.includes(guess);
        let isCorrectPlace = isCorrectCode && correctCode[place] === guess;

        if (isCorrectPlace) {
            colour = 'green';
        } else if (isCorrectCode) {
            colour = 'amber';
        }
        return colour;
    }

    render() {
        const {
            correctCode,
            guess,
            place
        } = this.props;

        return (
            <div className={`box ${this.getColor(correctCode, guess, place)}`}>{guess}</div>
        )
    }
}

export default Box;

// right num right place
// if Guess = correctCode & place --> Green
// if Guess = correctCode & not place --> amber
// if Guess not in correctCode --> Grey     


// right num wrong place