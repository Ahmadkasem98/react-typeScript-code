import React, { useState } from "react";

type userProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | userProps>(null);

  const logIn = () => {
    setUser({ name: "ahmad Kasem", email: "ahmad@gmail.com" });
  };
  const logOut = () => {
    setUser({ name: "abd Kasem", email: "abd@gmail.com" });
  };

  return (
    <div>
      <div>
        <button onClick={logIn}>log In</button>
        <button onClick={logOut}>log Out</button>
      </div>
      <h2>User name is {user?.name}</h2>
      <h3>User email is {user?.email}</h3>
    </div>
  );
};

export default User;
