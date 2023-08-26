import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      Swal.fire({
        icon: "success",
        title: "Login berhasil",
        text: "Selamat datang!",
      });
      router("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: "Username atau password salah",
      });
    }
  };
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('preferredMode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('preferredMode', 'light');
    }
  }, [isDarkMode]);

  return (
    <div style={{
      position: "absolute",
      right: "35%",
      top: "15%"
    }}>
      <div
        className={`card shadow ${style.card} ${isDarkMode ? style.dark : ""}`}
        style={{
          border: "white",
          width: "400px",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <div className="mx-auto mt-1">
          <img
            src={Logo}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
            }}
            className="card-img-top mt-2"
            alt="..."
          />
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="d-flex flex-row">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label className="d-flex flex-row">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={`btn mt-3 btn-primary ${style.button} ${isDarkMode ? style.dark : ""}`} style={{ width: "300px" }}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
