import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Public = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      maxWidth="xs"
    >
      <Typography variant="h4">public page</Typography>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button>
    </Container>
  );
};

export default Public;
