import { Link } from "@tanstack/react-router";

export interface PropType {
  text: string;
  route: string;
}

export default function NavBarLink(props: PropType) {
  return (
    <Link
      to={props.route}
      // className={(isActive) => {
      //   return isActive
      //     ? "block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      //     : "block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
      // }}
    >
      {props.text}
    </Link>
  );
}
