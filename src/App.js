import logo from './logo.svg';
import './App.css';
import Row from "./Components/Row"
import React from 'react';

/*
state:
number of guesses
what the correct code is for this session


*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 1, // a row of guesses ... 3
      correctCode: [5, 3, 2], // randomly generate this... unique set of 3
      numbersPicked: {
        1: [6, 7, 8],
        2: [1, 3, 4],
        3: [5, 8, 1],
        4: [4, 2, 9]
      },
      place: [0, 1, 2]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Numpty</h1>
          <Row turn={this.state.turn} guesses={this.state.numbersPicked[1]} correctCode={this.state.correctCode} />
          <Row turn={this.state.turn} guesses={this.state.numbersPicked[2]} correctCode={this.state.correctCode} />
          <Row turn={this.state.turn} guesses={this.state.numbersPicked[3]} correctCode={this.state.correctCode} />
          <Row turn={this.state.turn} guesses={this.state.numbersPicked[4]} correctCode={this.state.correctCode} />
        </header>
      </div>
    );
  };

}

export default App;


// Components
// Guesses
// Num Pad