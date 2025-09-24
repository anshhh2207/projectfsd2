import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Login = () => {
  const [input, setInput] = useState({});
  const baseurl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post(`${baseurl}/api/login`, input)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        if (res.data.user) {
          sessionStorage.setItem("role", res.data.user.role);
          if (res.data.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          alert(`Error: ${error.response.data.message}`);
        } else {
          alert("An unexpected error occurred. Please try again.");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f1f1ff 0%, #91d2d6ff 100%)",
      }}
    >
      <Box
        sx={{
          width: 380,
          padding: "40px 32px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          textAlign: "center",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "italian",
            fontWeight: 600,
            color: "#2d3748",
            letterSpacing: "-0.5px",
            marginBottom: "24px",
          }}
        >
          Welcome back to Soul of India
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            color: "#718096",
            marginBottom: 4,
            fontSize: "15px",
          }}
        >
          Sign in to your account
        </Typography>

        <TextField
          fullWidth
          label="Email address"
          variant="outlined"
          margin="normal"
          name="email"
          onChange={inputHandler}
          sx={{
            marginBottom: "16px",
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          type="password"
          onChange={inputHandler}
          sx={{
            marginBottom: "8px",
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
        />

        <div style={{ textAlign: "right", marginBottom: "24px" }}>
          <Link
            to="/forgot-password"
            style={{
              color: "#1a9b00ff",
              fontSize: "14px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Forgot password?
          </Link>
        </div>

        <Button
          onClick={addHandler}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#10660dff",
            marginTop: 1,
            fontWeight: "600",
            padding: "12px",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "15px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#7acf88ff",
              boxShadow: "none",
            },
          }}
        >
          Continue
        </Button>

        <Typography
          variant="body2"
          sx={{ color: "#718096", marginTop: 4, fontSize: "14px" }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#158a2eff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
        </Typography>

        <Divider
          sx={{
            margin: "32px 0 24px",
            "&::before, &::after": { borderColor: "rgba(0, 0, 0, 0.05)" },
          }}
        >
          <Typography variant="caption" sx={{ color: "#a0aec0" }}>
            Or continue with
          </Typography>
        </Divider>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              padding: "8px 16px",
              borderColor: "#e2e8f0",
              "&:hover": { borderColor: "#cbd5e0" },
            }}
          >
            <GoogleIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              padding: "8px 16px",
              borderColor: "#e2e8f0",
              "&:hover": { borderColor: "#cbd5e0" },
            }}
          >
            <GitHubIcon sx={{ color: "#2d3748" }} />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
