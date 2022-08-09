import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.pickNumber = this.pickNumber.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
    }

    pickNumber(e) {
        let guesses = this.props.guesses;
        let turn = this.props.turn;
        const maxGuessSize = 3;
        if(turn === 1){
            if (guesses[1].length < maxGuessSize) {
                guesses[1].push(Number(e.target.value));
            }
            this.props.updateGuess(guesses[1]);
        }
        if(turn === 2){
            if (guesses[2].length < maxGuessSize) {
                guesses[2].push(Number(e.target.value));
            }
            this.props.updateGuess(guesses[2]);
        }
    }

    getColour() {
        let colour = '';
        
    }

    submitGuess() {
        this.props.updateTurn();
    }




    // submitGuess() {

    // }

    render() {
        return (
            <div className="CalculatorContainer">
                <div className="CalcRow1">
                    <button className="Calcbox" onClick={this.pickNumber} value={7}>7</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={8}>8</button>
                    <button className="Calcbox" onClick={this.pickNumber} value={9}>9</button>
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
                    <div className="Calcbox">Clear</div>
                    <button className="Calcbox" onClick={this.pickNumber} value={0}>0</button>
                    <div className="Calcbox" onClick={this.submitGuess}>Enter</div>
                </div>

            </div>
        )
    }
}

export default Calculator;