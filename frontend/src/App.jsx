import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex">
      <aside className="">
        <nav className="pt-12 px-11 flex flex-col min-h-screen gap-8 bg-sky-200 text-gray-100">
          <Link to="/comparison">comparison</Link>
          <Link to="/product">product</Link>
          <Link to="/login">login</Link>
          <Link to="/sign_up">sign_up</Link>
        </nav>
      </aside>
      <div className="w-[100%] flex flex-col">
        <header className="min-h-[3rem] pr-8 flex items-center justify-end gap-8 bg-gray-100">
          <p>header</p>
          <div className="w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full">
            R
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
