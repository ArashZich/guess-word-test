export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLettersSet = new Set(secretWord.split(""));
  const guessedWordSet = new Set(guessedWord.split(""));

  return [...secretLettersSet].filter((letter) => guessedWordSet.has(letter))
    .length;
}
