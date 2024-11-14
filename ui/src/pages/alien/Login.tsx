import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { MouseEventHandler } from "react";
import { GameSchema } from "../../types/Alien.Validation";

export default function Login() {
  const navigate = useNavigate();
  const createGameMutation = useMutation({
    mutationKey: ["createGame"],
    mutationFn: () => axios.post<GameSchema>("/game").then((res) => res.data),
    onSuccess: () => {
      navigate({ to: "/alien/game" });
    },
  });

  const handleContactClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    createGameMutation.mutate();
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="flex flex-col space-y-0">
        <div className="w-full text-center">
          Welcome to Earth. Time to make contact.
        </div>
        <div className="text-xs w-full text-center">(Create a new game)</div>
      </div>
      <button
        onClick={handleContactClick}
        className="w-content text-white bg-gradient-to-br from-fuchsia-300 to-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
      >
        Contact Earth
      </button>
      <Link
        to="/"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        I don't belong here
      </Link>
    </div>
  );
}
