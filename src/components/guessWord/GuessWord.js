import React from "react";
import PropTypes from "prop-types";

const GuessWord = (props) => {
  return <div>GuessWord</div>;
};

GuessWord.propTypes = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWord;
