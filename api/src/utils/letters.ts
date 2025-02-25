import { LetterColorSchema } from "../validation/alienCode";

export const greenLetters = ["A", "E", "I", "L", "N", "O", "R", "S", "T"];
export const blackLetters = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "M",
  "P",
  "U",
  "W",
  "Y",
];
export const redLetters = ["J", "K", "Q", "V", "X", "Z"];

export const trustPossibleLetters: LetterColorSchema[][] = [
  ["green"],
  ["black", "red"],
  ["black", "red"],
];
export const amplifyPossibleLetters: LetterColorSchema[][] = [
  ["green"],
  ["black", "red"],
];
export const suspicionPossibleLetters: LetterColorSchema[][] = [
  ["green", "black", "red"],
];
