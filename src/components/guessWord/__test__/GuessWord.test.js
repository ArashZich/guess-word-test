import React from "react";
import { shallow } from "enzyme";
import GuessWord from "../GuessWord";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  guessWords: [{ guessWord: "train", letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWord {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessWord, defaultProps);
});
