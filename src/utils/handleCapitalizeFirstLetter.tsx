export const handleCapitalizeFirstLetter = function (word: string) {
  if (!word) return word;
  const splittedWord = word.split("");
  splittedWord[0] = splittedWord[0].toUpperCase();
  const joinedWord = splittedWord.join("");
  return joinedWord;
};
