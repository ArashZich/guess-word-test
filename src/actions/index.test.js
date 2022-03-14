import { actionTypes, correctGuess } from ".";

describe("correctGuess", () => {
  test("returns an action with type 'CORRECT_GUESS' ", () => {
    const action = correctGuess();
    //toBe => number,string , toEqual => obj,array
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
