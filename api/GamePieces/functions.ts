import {
  AlienCodeSchema,
  LetterColorSchema,
} from "../Types/AlienCode.Validation";
import {
  amplifyPossibleLetters,
  blackLetters,
  greenLetters,
  redLetters,
  suspicionPossibleLetters,
  trustPossibleLetters,
} from "./Letters";

export function getAlienCode(): AlienCodeSchema {
  const getLetter = (type: LetterColorSchema[], used: string[]) => {
    const redAllowed = () => {
      return !used.some((usedLetter) => redLetters.includes(usedLetter));
    };
    let pool: string[] = [];
    if (type.includes("green")) {
      console.log("Using Green Letters");
      pool = [...pool, ...greenLetters];
    }
    if (type.includes("black")) {
      console.log("Using Black Letters");
      pool = [...pool, ...blackLetters];
    }
    if (redAllowed() && type.includes("red")) {
      console.log("Using Red Letters");
      pool = [...pool, ...redLetters];
    }
    console.log("🚀 ~ getLetter ~ pool:", pool);
    const narrowedPool = pool.filter((letter) => !used.includes(letter));
    console.log("🚀 ~ getLetter ~ narrowedPool:", narrowedPool);
    return narrowedPool[Math.floor(Math.random() * narrowedPool.length)];
  };

  const positions = [
    ...trustPossibleLetters,
    ...amplifyPossibleLetters,
    ...suspicionPossibleLetters,
  ];

  let used: string[] = [];

  for (let index = 0; index < positions.length; index++) {
    const position = positions[index];
    const letter = getLetter(position, used);
    used.push(letter);
  }

  return {
    trust: used.slice(0, 3),
    amplify: used.slice(3, 5),
    suspicion: used.slice(5),
  };
}
