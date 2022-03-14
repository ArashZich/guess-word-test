import React, { Component } from "react";
import "./App.css";
import GuessedWord from "./components/guessWord/GuessedWord";
import Congrats from "./components/congrats/Congrats";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWord
          guessedWords={[
            {
              guessedWord: "train",
              letterMatchCount: 3,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
