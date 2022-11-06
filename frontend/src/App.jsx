import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((show) => !show);
  };

  return (
    <div className="overflow-hidden min-h-screen bg-secondary-BGLT">
      <header className="py-4 flex items-center  border-b-2 bg-base-white border-main-middle3C">
        <div className="relative flex items-center justify-between container mx-auto">
          <div className="flex items-center gap-16">
            <div className="font-extrabold text-3xl text-main-middle3C">
              LOGO
            </div>
            <nav className="flex gap-8 font-bold text-main-middle3C">
              <Link to="/">Поиск</Link>
            </nav>
          </div>
          <nav
            className={
              show
                ? "absolute z-10 top-5 right-5 p-4 flex flex-col gap-4 rounded-md shadow-md font-bold transition ease-in-out delay-150 animate bg-secondary-150 text-base-white"
                : "absolute z-10 top-5 right-5 flex flex-col gap-4 rounded-md shadow-md font-bold transition ease-in-out delay-150 opacity-0 translate-x-[50%] translate-y-[-50%] w-0 h-0 bg-secondary-150 text-base-white"
            }
          >
            <Link
              onClick={handleToggle}
              to="/profile"
              className={!show ? "hidden" : ""}
            >
              Профиль
            </Link>
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
              Регистрация
            </Link>
          </nav>
          <div
            onClick={handleToggle}
            className="relative z-20 w-10 h-10 flex items-center justify-center font-bold text-lg  rounded-full shadow-md hover:scale-105 cursor-pointer active:scale-110 bg-secondary-150 text-base-white"
          >
            A
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
