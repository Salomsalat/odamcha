import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Register = async () => {
    try {
      await axios.post(
        "https://nazorat-ishi-default-rtdb.firebaseio.com/users.json",
        { username, password }
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h4">
        register
      </Typography>
      <TextField
        label="user"
        fullWidth
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={Register}>
        Register
      </Button>
    </Container>
  );
};

export default Register;
