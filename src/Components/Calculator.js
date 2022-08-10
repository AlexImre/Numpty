import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.pickNumber = this.pickNumber.bind(this);
        this.getColor = this.getColor.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
        this.state = {
            numberPressed: 0
        }
    }

    pickNumber(e) {
        let turn = this.props.turn;
        let guesses = this.props.guesses;
        let numberPressed = Number(e.target.value);
        const maxGuessSize = 3;
        if (guesses[turn].length < maxGuessSize) {
            guesses[turn].push(Number(numberPressed));
        }
        this.props.updateGuess(guesses[turn]);

        this.setState({
            numberPressed: numberPressed
        })
    }

    getColor(numberPressed, place, correctCode) {        
        let colour = '';
        // numberPressed = this.state.numberPressed;
        let isCorrectCode = correctCode.includes(numberPressed);
        let isCorrectPlace = correctCode[place] === numberPressed;

        if (isCorrectPlace && isCorrectCode) {
            colour = 'green'
        } else if (isCorrectCode) {
            colour ='amber'
        } else {
            colour ='grey'
        }

        console.log(`numberPressed is: ${numberPressed}, place is: ${place} and correctCode is: ${correctCode}`);
        console.log(`isCorrectCode: ${isCorrectCode} isCorrectPlace: ${isCorrectPlace}`);
        console.log(`colour of box should be: ${colour}`);

        return colour;
    }

    submitGuess() {
        this.props.updateTurn();
    }

    resetGame() {
        this.props.resetGame();
    }

    render() {
        const {
            turn,
            guesses,
            correctCode,
        } = this.props;

        let numberPressed = this.state.numberPressed;

        return (
            <div className="CalculatorContainer">
                <div className="CalcRow1">
                    <button 
                        // DO I NEED TO HAVE INDIVIDUAL CALC BOX COMPONENTS?
                        className={`Calcbox ${this.getColor(numberPressed, 0, correctCode)}`}
                        // WHY DOES PICKNUMBER WORK WITHOUT (e)?
                        onClick={this.pickNumber}
                        // onClick={(e) => {
                        //     this.pickNumber(e);
                        //     this.getColor(e, 0, correctCode);
                        //     }} 
                        value={7}
                        >7
                    </button>
                    <button 
                        className={`Calcbox ${this.getColor(numberPressed, 1, correctCode)}`} 
                        onClick={this.pickNumber} 
                        value={8}
                        >8
                    </button>
                    <button 
                        className={`Calcbox ${this.getColor(numberPressed, 2, correctCode)}`} 
                        onClick={this.pickNumber} 
                        value={9}>
                        9
                    </button>
                </div>
                <div className="CalcRow2">
                    <button className="Calcbox" onClick={this.pickNumber} value={4}>4</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={5}>5</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={6}>6</button>
                </div>
                <div className="CalcRow3">
                    <button className="Calcbox" onClick={this.pickNumber} value={1}>1</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={2}>2</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={3}>3</button>
                </div>
                <div className="CalcRow4">
                    <div className="Calcbox" onClick={this.resetGame}>Reset</div>
                    <button className="Calcbox" onClick={this.pickNumber} value={0}>0</button>
                    <div className="Calcbox" onClick={this.submitGuess}>Enter</div>
                </div>

            </div>
        )
    }
}

export default Calculator;