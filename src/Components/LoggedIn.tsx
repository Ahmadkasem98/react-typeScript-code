import React, { useState } from "react";

type logProps = {};

const LoggedIn = (props: logProps) => {
  const [isLogged, setIsLogged] = useState<boolean>();

  const logIn = () => {
    setIsLogged(true);
  };
  const logOut = () => {
    setIsLogged(false);
  };

  return (
    <div>
      <button onClick={logIn}>logIn</button>
      <button onClick={logOut}>logOut</button>
      <div>uset is - {isLogged ? "Logged in" : "Logged Out"}</div>
    </div>
  );
};

export default LoggedIn;
