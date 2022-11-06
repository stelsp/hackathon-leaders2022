import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((show) => !show);
  };

  return (
    <div className="overflow-hidden">
      <header className="py-4 flex items-center bg-white border-b-2 border-sky-100">
        <div className="relative flex items-center justify-between container mx-auto ">
          <nav className="flex gap-8 text-sky-100 font-bold">
            <Link to="/">Поиск</Link>
            <Link to="/comparison/volume">Объем торгов</Link>
            <Link to="/comparison/balance">Торговый баланс</Link>
          </nav>
          <nav
            className={
              show
                ? "absolute z-10 top-5 right-5 p-4 flex flex-col gap-4 rounded-md shadow-md bg-sky-200 text-gray-100 font-bold transition ease-in-out delay-150 animate"
                : "absolute z-10 top-5 right-5 flex flex-col gap-4 rounded-md shadow-md bg-sky-200 text-gray-100 font-bold transition ease-in-out delay-150 opacity-0 translate-x-[50%] translate-y-[-50%] w-0 h-0"
            }
          >
            <Link
              onClick={handleToggle}
              to="/login"
              className={!show ? "hidden" : ""}
            >
              Войти
            </Link>
            <Link
              onClick={handleToggle}
              to="/sign_up"
              className={!show ? "hidden" : ""}
            >
              Зарегистрироваться
            </Link>
          </nav>
          <div
            onClick={handleToggle}
            className="relative z-20 w-10 h-10 flex items-center justify-center text-gray-100 font-bold text-lg bg-sky-100 rounded-full shadow-md hover:scale-105 cursor-pointer active:scale-110"
          >
            R
          </div>
        </div>
      </header>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
