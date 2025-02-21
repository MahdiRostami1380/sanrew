"use client";

import { adminLogin } from "@/actions/AdminLogin";
import { useState } from "react";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaKey } from "react-icons/fa";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const AdminPage = () => {
  const [usernamePassword, setUsernamePassword] = useState({
    username: "",
    password: "",
  });

  return (
    <main
      dir="ltr"
      className={`mt-32 flex flex-col gap-5 items-center ${inter.className}`}
    >
      <h1 className="font-bold text-3xl underline">Admin Login</h1>
      <div className="flex items-center border-2 border-[#ff006e] rounded-xl p-3">
        <GiPoliceOfficerHead className="text-2xl" />
        <input
          type="text"
          value={usernamePassword.username}
          placeholder="Username"
          className="py-1 px-4 rounded-sm bg-transparent outline-none"
          onChange={(e) =>
            setUsernamePassword({
              ...usernamePassword,
              username: e.target.value,
            })
          }
        />
      </div>
      <div className="flex items-center border-2 border-[#ff006e] rounded-xl p-3">
        <FaKey className="text-2xl" />
        <input
          type="password"
          value={usernamePassword.password}
          placeholder="Password"
          className="py-1 px-4 rounded-sm bg-transparent outline-none"
          onChange={(e) =>
            setUsernamePassword({
              ...usernamePassword,
              password: e.target.value,
            })
          }
        />
      </div>
      <button
        onClick={() => adminLogin(usernamePassword)}
        className="bg-slate-800 text-slate-50 px-4 py-2 rounded-xl"
      >
        Login
      </button>
    </main>
  );
};

export default AdminPage;
