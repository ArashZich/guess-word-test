import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
  const { success } = props;
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

Congrats.defaultProps = {
  success: false,
};

export default Congrats;
