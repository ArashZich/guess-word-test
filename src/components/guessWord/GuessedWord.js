import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  const { guessedWords } = props;
  let content;
  if (guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
