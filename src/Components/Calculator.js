import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.pickNumber = this.pickNumber.bind(this);
        this.getColor = this.getColor.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
        this.state = {
            numberPressed: 0,
            correctNumAndPlace: [],
            correctNum: [],
            wrongNum: [],
            buttonColours: {
                0: "",
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
                6: "",
                7: "",
                8: "",
                9: ""
            }
        }
        this.updateButtonColours = this.updateButtonColours.bind(this);
        this.clearGuesses = this.clearGuesses.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.gameWon = this.gameWon.bind(this);
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

        let correctCode = this.props.correctCode;
        let correctNumAndPlace = this.state.correctNumAndPlace;
        let correctPlace = this.state.correctNum;
        let wrongNum = this.state.wrongNum;
        let place = guesses[turn].length - 1;
        console.log(`place: ${place}`)
        let isCorrectNum = correctCode.includes(numberPressed);
        let isCorrectPlace = correctCode[place] === numberPressed;
        if (isCorrectNum && isCorrectPlace){
            correctNumAndPlace.push(numberPressed);
        } else if (isCorrectNum) {
            correctPlace.push(numberPressed);
        } else {
            wrongNum.push(numberPressed)
        }

        this.setState({
            numberPressed: numberPressed
        })
    }

    getColor(buttonValue) {        
        let correctNumAndPlace = this.state.correctNumAndPlace;
        let correctPlace = this.state.correctNum;
        let wrongNum = this.state.wrongNum;
        let buttonColours = this.props.buttonColours;
        if (correctNumAndPlace.includes(buttonValue)) {
            buttonColours[buttonValue] = "green";
        } else if (correctPlace.includes(buttonValue)) {
            buttonColours[buttonValue] = "amber";
        } else if (wrongNum.includes(buttonValue)) {
            buttonColours[buttonValue] = "grey";
        }
        return buttonColours[buttonValue];
    }

    updateButtonColours(buttonValues) {
        if (this.props.guesses[this.props.turn].length === 3){
        this.setState(prevState => ({
            buttonColours: {
              ...prevState.buttonColours,
              [buttonValues[0]]: this.getColor(buttonValues[0]),
              [buttonValues[1]]: this.getColor(buttonValues[1]),
              [buttonValues[2]]: this.getColor(buttonValues[2])
            }
          }))
        }
    }

    updateTurn() {
        this.setState(prevState => ({
          rowComplete: {
            ...prevState.rowComplete,
            [this.state.turn]: true
          },
          turn: this.state.turn + 1
        }))
      }
    
    submitGuess() {
        if (this.props.guesses[this.props.turn].length === 3){
            this.props.updateTurn();
        }
    }

    gameWon() {
        this.props.gameWon();
    }

    resetGame() {
        this.props.resetGame();
        this.setState({
            numberPressed: 0,
            correctNumAndPlace: [],
            correctNum: [],
            wrongNum: [],
            buttonColours: {
                0: "",
                1: "",
                2: "",
                3: "",
                4: "",
                5: "",
                6: "",
                7: "",
                8: "",
                9: ""
            }
        })
    }

    clearGuesses() {
        this.props.guesses[this.props.turn].pop();
        this.props.updateGuess(this.props.guesses[this.props.turn]);
    }

    render() {
        const {
            turn
        } = this.props;

        return (
            <>
            <div className="CalculatorContainer">
                <div className="CalcRow1">
                    <button 
                        // DO I NEED TO HAVE INDIVIDUAL CALC BOX COMPONENTS?
                        className={`Calcbox ${this.state.buttonColours[7]}`}
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
                        className={`Calcbox ${this.state.buttonColours[8]}`}
                        onClick={ (e) => {
                            this.pickNumber(e);
                            }
                        }
                        value={8}
                        >8
                    </button>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[9]}`}
                        onClick={this.pickNumber} 
                        value={9}>
                        9
                    </button>
                </div>
                <div className="CalcRow2">
                    <button 
                        className={`Calcbox ${this.state.buttonColours[4]}`}
                        onClick={this.pickNumber} 
                        value={4}>
                        4
                    </button>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[5]}`}
                        onClick={this.pickNumber} 
                        value={5}>
                        5
                    </button>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[6]}`}
                        onClick={this.pickNumber} 
                        value={6}
                        >6
                    </button>
                </div>
                <div className="CalcRow3">
                    <button 
                        className={`Calcbox ${this.state.buttonColours[1]}`}
                        onClick={this.pickNumber} 
                        value={1}
                        >1
                    </button>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[2]}`}
                        onClick={this.pickNumber} 
                        value={2}
                        >2
                    </button>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[3]}`}
                        onClick={this.pickNumber} 
                        value={3}
                        >3
                    </button>
                </div>
                <div className="CalcRow4">
                    <div 
                        className="Calcbox Clear" 
                        onClick={this.clearGuesses}
                        ><i className="fa-solid fa-delete-left"></i>
                    </div>
                    <button 
                        className={`Calcbox ${this.state.buttonColours[0]}`}
                        onClick={this.pickNumber} 
                        value={0}>
                        0
                    </button>
                    <div 
                        className="Calcbox Enter" 
                        onClick={ () => {
                            this.submitGuess();
                            this.updateButtonColours(this.props.guesses[turn]);
                            this.props.gameWon();
                            }}
                        >Enter
                    </div>
                </div>

            </div>
            <div className="Calcbox Reset" onClick={this.resetGame}>Reset</div>

            </>
        )
    }
}

export default Calculator;