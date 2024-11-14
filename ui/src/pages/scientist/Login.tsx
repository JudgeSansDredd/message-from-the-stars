import { Link } from "@tanstack/react-router";

export default function Login() {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <div>Welcome to SETI, doctor. Which room do you belong in?</div>
      <div>
        <label
          htmlFor="roomCode"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Room Code
        </label>
        <input
          type="text"
          id="roomCode"
          className="max-w-md text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ABCD"
          required
        />
      </div>
      <button
        type="submit"
        className="w-content text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
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
