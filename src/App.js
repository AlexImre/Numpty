import logo from './logo.svg';
import './App.css';
import Row from "./Components/Row"
import React from 'react';
import Calculator from './Components/Calculator';
import HappyEnding from './Components/HappyEnding';

/*
state:
number of guesses
what the correct code is for this session
*/

class App extends React.Component {
  generateRandomNumber() {
    const exclusions = [111, 222, 333, 444, 555, 666, 777, 888, 999];  
    let randomNumber = Math.floor(Math.random() * 899) + 100;
    while (exclusions.includes(randomNumber)){
      randomNumber = Math.floor(Math.random() * 999);
    }
    const correctNumber = Array.from(String(randomNumber), Number);
    return correctNumber;
  }
  
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      rowComplete: {
        1: false,
        2: false,
        3: false,
        4: false
      },
      correctCode: this.generateRandomNumber(),
      numbersPicked: {
        1: [],
        2: [],
        3: [],
        4: []
      },
      place: [0, 1, 2],
      gameLost: false,
      gameWon: false
    };
    this.updateGuess = this.updateGuess.bind(this);
    this.updateTurn = this.updateTurn.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGuess(guess) {
    this.setState(prevState => ({
      numbersPicked: {
        ...prevState.numbersPicked,
        [this.state.turn]: guess
      }
    }))
    // this.setState({ rowComplete: false });
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

  // JUST COPY INITIAL STATE CONDITIONS ONCE FINALISED
  resetGame() {
    this.setState({ });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Numpty</h1>
          <Row 
            turn={this.state.turn} 
            guesses={this.state.numbersPicked[1]} 
            correctCode={this.state.correctCode} 
            updateColour={this.updateColour} 
            rowComplete={this.state.rowComplete} />
          <Row 
            turn={this.state.turn} 
            guesses={this.state.numbersPicked[2]} 
            correctCode={this.state.correctCode} 
            updateColour={this.updateColour}
            rowComplete={this.state.rowComplete} />
          {/* <Row 
            turn={this.state.turn} 
            guesses={this.state.numbersPicked[3]} 
            correctCode={this.state.correctCode} 
            updateColour={this.updateColour}
            rowComplete={this.state.rowComplete} />
          <Row 
            turn={this.state.turn} 
            guesses={this.state.numbersPicked[4]} 
            correctCode={this.state.correctCode} 
            updateColour={this.updateColour}
            rowComplete={this.state.rowComplete} /> */}
            <hr></hr>
            <hr></hr>
            <hr></hr>
          <Calculator 
            turn={this.state.turn} 
            guesses={this.state.numbersPicked} 
            correctCode={this.state.correctCode}
            updateGuess={this.updateGuess}
            rowComplete={this.state.rowComplete}
            updateTurn={this.updateTurn}
            place={this.state.place}
            resetGame ={this.resetGame}
            />
        </header>
        {/* HappyEnding only shows on gameWon */}
        {this.state.gameWon? <HappyEnding winCondition=""/> : ""}
      </div>
    );
  };

}

export default App;


// Components
// Guesses
// Num Pad