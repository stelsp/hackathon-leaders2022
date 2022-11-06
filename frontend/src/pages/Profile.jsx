import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main className="py-16">
      <header className="mb-6 flex items-start justify-between">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 flex items-center justify-center text-4xl font-bold uppercase rounded-full bg-secondary-150 text-base-white">
            А
          </div>
          <div>
            <h2 className="mb-1 text-4xl text-main-dark">Иван Иванов</h2>
            <p className="mb-6 cursor-pointer text-base-166">
              редактировать профиль
            </p>
            <p className="font-bold mb-2 text-base-black">
              Электронная почта:&nbsp;
              <span className="font-normal">ivan@ivanov.ru</span>
            </p>
            <p className="font-bold text-base-black">
              Роль:&nbsp;<span className="font-normal">админ</span>
            </p>
          </div>
        </div>
        <Button variant="contained" type="button">
          <Link className="w-full h-full" to="/">
            ВЫЙТИ
          </Link>
        </Button>
      </header>
    </main>
  );
};

export default Profile;
