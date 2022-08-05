import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
       
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };
  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="login">Login</button>

        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
