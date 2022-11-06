import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main className="py-16">
      <header className="mb-6 flex items-start justify-between">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 flex items-center justify-center text-4xl font-bold uppercase bg-blue-200 text-white rounded-full">
            a
          </div>
          <div>
            <h2 className="mb-1 text-4xl">Иван Иванов</h2>
            <p className="text-gray-300 mb-6 cursor-pointer">
              редактировать профиль
            </p>
            <p className="font-bold mb-2">
              Электронная почта:&nbsp;
              <span className="font-normal">ivan@ivanov.ru</span>
            </p>
            <p className="font-bold">
              Роль:&nbsp;<span className="font-normal">админ</span>
            </p>
          </div>
        </div>
        <Button variant="contained" type="button">
          <Link to="/">ВЫЙТИ</Link>
        </Button>
      </header>
    </main>
  );
};

export default Profile;
