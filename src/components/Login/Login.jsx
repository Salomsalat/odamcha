import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.get(
        "https://nazorat-ishi-default-rtdb.firebaseio.com/users.json"
      );

      const users = Object.values(data);
      const userExists = users.find(
        (user) => user.username === username && user.password === password
      );

      if (userExists) {
        dispatch(login());
        navigate("/private");
      } else {
        console.log("hato");
      }
    } catch {
      console.log("hato");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        fullWidth
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
