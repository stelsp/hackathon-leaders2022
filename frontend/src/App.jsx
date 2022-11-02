import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [showed, setShowed] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setShowed(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowed(false);
  };

  return (
    <div className="flex flex-col">
      <header
        onClick={handleClose}
        className="relative min-h-[3rem] px-2 flex items-center justify-end bg-gray-100"
      >
        <div className="flex items-center gap-8">
          <p>Header</p>
          <div className="w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full hover:scale-105 cursor-pointer active:scale-110">
            R
          </div>
        </div>
      </header>

      {/* TODO: поправить div костыль ниже */}
      <div onClick={handleClose}>
        <Outlet />
      </div>

      <aside
        className={
          showed
            ? "px-11 absolute top-5 left-5 rounded-md z-10 bg-sky-200 transition ease-in-out delay-150"
            : "px-11 absolute z-10 bg-sky-200 opacity-0 hidden transition ease-in-out delay-150"
        }
      >
        <nav className="py-10 flex flex-col gap-8 text-gray-100">
          <Link onClick={handleClose} to="/comparison">
            Главная
          </Link>
          <Link onClick={handleClose} to="/product">
            Продукт
          </Link>
          <Link onClick={handleClose} to="/login">
            Войти
          </Link>
          <Link onClick={handleClose} to="/sign_up">
            Зарегистрироваться
          </Link>
        </nav>
      </aside>
      <div
        onClick={showed ? handleClose : handleOpen}
        className="absolute z-20 top-2 left-2 w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full transition ease-in-out delay-150 hover:scale-105 cursor-pointer active:scale-110"
        // className={
        //   showed
        //     ? "absolute z-20 top-2 left-2 w-8 h-8 p-2 flex items-center justify-center text-sky-100 text-bold text-lg bg-gray-100 rounded-full transition ease-in-out delay-150 hover:scale-105 cursor-pointer active:scale-110"
        //     : "absolute z-20 top-2 left-2 w-8 h-8 p-2 flex items-center justify-center text-gray-100 text-bold text-lg bg-sky-100 rounded-full transition ease-in-out delay-150 hover:scale-105 cursor-pointer active:scale-110"
        // }
      >
        T
      </div>
    </div>
  );
};

export default App;
