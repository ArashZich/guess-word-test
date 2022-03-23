import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./test/testUtils";
import App, { UnConnectedApp } from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  test("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("has access to guessedWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWords);
  });

  test("has access to success state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test("getSecretWord action creator is a function on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on App Mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    success: false,
    guessedWords: [],
    getSecretWord: getSecretWordMock,
  };
  const wrapper = shallow(<UnConnectedApp {...props} />);

  wrapper.instance().componentDidMount();
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
