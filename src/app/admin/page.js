"use client";

import { adminLogin } from "@/actions/AdminLogin";
import { useState } from "react";

const AdminPage = () => {
  const [usernamePassword, setUsernamePassword] = useState({
    username: "",
    password: "",
  });

  return (
    <main dir="ltr" className="mt-32 flex flex-col gap-5 items-center">
      <div>
        <input
          type="text"
          value={usernamePassword.username}
          placeholder="Username"
          onChange={(e) =>
            setUsernamePassword({
              ...usernamePassword,
              username: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          type="text"
          value={usernamePassword.password}
          placeholder="Password"
          onChange={(e) =>
            setUsernamePassword({
              ...usernamePassword,
              password: e.target.value,
            })
          }
        />
      </div>
      <button onClick={() => adminLogin(usernamePassword)}>Login</button>
    </main>
  );
};

export default AdminPage;
