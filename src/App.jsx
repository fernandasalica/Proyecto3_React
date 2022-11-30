import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./css/globals.css";
import "../src/css/signup.css";
import "../src/css/contact.css";
import { useEffect, useState } from "react";

const USERS = [
  { userName: "admin", pass: "admin", role: "admin" },
  { userName: "user", pass: "user", role: "user" },
];

function App() {
  const [auth, setAuth] = useState({
    user: "",
    role: "",
  });

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const loggedIn = () => {
    return auth.user !== "";
  };

  const validate = (userName, pass) => {
    let userOk = false;
    let passOk = false;
    const user = USERS.find((user) => user.userName === userName);
    if (user) {
      userOk = true;
      passOk = user.pass === pass;
    }

    return [userOk, passOk];
  };

  const login = (userName) => {
    const userFound = USERS.find((user) => user.userName === userName);
    setAuth({
      userName: userFound.userName,
      role: userFound.role,
    });
  };
  const logout = () => {
    setAuth({
      user: "",
      role: "",
    });
  };

  return (
    <>
      <BrowserRouter>
        <Main
          auth={auth}
          validate={validate}
          login={login}
          logout={logout}
          loggedIn={loggedIn}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
