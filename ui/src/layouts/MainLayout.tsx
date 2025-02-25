import { Outlet } from "@tanstack/react-router";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto text-black bg-slate-50 dark:bg-slate-900 dark:text-white">
        <NavBar excludeNavLinks={true} />
        <div className="container max-w-screen-xl p-2 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
