import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
const NavBar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/createpost">Create Post</Link>
      {!isAuth && <Link to="/login">Login</Link>}
      {isAuth && <button onClick={signUserOut}>Logout</button>}
    </nav>
  );
};

export default NavBar;
