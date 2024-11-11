import { LetterColorSchema } from "./AlienCode.Validation";
import { blackLetters, greenLetters, redLetters } from "./Letters";

export const getLetterColor = (letter: string): LetterColorSchema => {
  if (greenLetters.includes(letter)) return "green";
  if (blackLetters.includes(letter)) return "black";
  if (redLetters.includes(letter)) return "red";
  throw new Error(`Letter ${letter} is not a valid letter`);
};
