import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [showed, setShowed] = useState(false);

  return (
    <div className="flex flex-col">
      <header className="relative min-h-[3rem] px-2 flex items-center justify-end bg-gray-100">
        <div className="flex items-center  gap-8">
          <p>header</p>
          <div className="w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full hover:scale-105 cursor-pointer active:scale-110">
            R
          </div>
        </div>
      </header>
      <Outlet />
      <aside
        className={
          showed
            ? "px-11 absolute z-10 bg-sky-200 transition ease-in-out delay-150"
            : "px-11 absolute z-10 bg-sky-200 opacity-0 transition ease-in-out delay-150"
        }
      >
        <nav className="pt-12 flex flex-col min-h-screen gap-8 text-gray-100">
          <Link to="/comparison">comparison</Link>
          <Link to="/product">product</Link>
          <Link to="/login">login</Link>
          <Link to="/sign_up">sign_up</Link>
        </nav>
      </aside>
      <div
        onClick={() => setShowed((showed) => !showed)}
        className={
          showed
            ? "absolute z-20 top-2 left-2 w-8 h-8 p-2 flex items-center justify-center text-sky-100 text-bold text-lg bg-gray-100 rounded-full transition ease-in-out delay-150 hover:scale-105 cursor-pointer active:scale-110"
            : "absolute z-20 top-2 left-2 w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full transition ease-in-out delay-150 hover:scale-105 cursor-pointer active:scale-110"
        }
      >
        T
      </div>
    </div>
  );
};

export default App;
