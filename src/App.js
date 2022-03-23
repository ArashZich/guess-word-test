import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import GuessedWord from "./components/guessWord/GuessedWord";
import Congrats from "./components/congrats/Congrats";
import { getSecretWord } from "./actions";
import Input from "./components/input/Input";
export class UnConnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Arash | Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWord guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnConnectedApp);
