import { getLetterColor } from "../utils/functions";

interface PropType {
  letter: string;
}

export default function Card({ letter }: PropType) {
  const letterColor = getLetterColor(letter);

  const getBgColor = () => {
    switch (letterColor) {
      case "green":
        return "bg-green-500";
      case "black":
        return "bg-gray-800";
      case "red":
        return "bg-red-500";
    }
  };

  return (
    <div
      className={`${getBgColor()} border border-gray-300 text-gray-900 text-3xl rounded-lg p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-12 text-center`}
    >
      {letter}
    </div>
  );
}
