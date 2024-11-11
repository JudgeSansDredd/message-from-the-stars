import { Link } from "@tanstack/react-router";

export default function Welcome() {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Link
        to="scientist/login"
        className="p-8 text-2xl bg-gradient-to-br from-cyan-300 to-cyan-700 rounded-full"
      >
        I am a scientist
      </Link>
      <Link
        to="/alien/login"
        className="p-8 text-2xl bg-gradient-to-br from-fuchsia-300 to-fuchsia-700 rounded-full"
      >
        I am an alien
      </Link>
    </div>
  );
}
