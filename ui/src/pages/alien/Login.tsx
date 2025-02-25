import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { getAuthQueryParams } from "../../queries/auth";
import { GameSchema } from "../../types/Alien.Validation";

export default function Login() {
  const [name, setName] = useState<string>("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createGameMutation = useMutation({
    mutationKey: ["createGame"],
    mutationFn: () =>
      axios.post<GameSchema>("/game", { name }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAuthQueryParams().queryKey,
      });
      navigate({ to: "/alien/game" });
    },
  });
  const authQuery = useQuery(getAuthQueryParams());

  useEffect(() => {
    if (!authQuery.isError && authQuery.data) {
      setName(authQuery.data.name);
    }
  }, [authQuery.data, authQuery.isError]);

  const handleContactClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    createGameMutation.mutate();
  };

  const onNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="flex flex-col space-y-0">
        <div className="w-full text-center">
          Welcome to Earth. Time to make contact.
        </div>
        <div className="text-xs w-full text-center">(Create a new game)</div>
      </div>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        className="max-w-md text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Fblthp"
        onChange={onNameChange}
        required
      />
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
