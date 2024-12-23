import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Register.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      alert("Đăng ký thất bại: " + error.message);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Box>
        {/* Nút Back dạng icon */}
        <IconButton
          className={styles.backbutton}
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "primary.main",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
      <Box className={styles.box} sx={{ flex: 1, mr: 3, textAlign: "center" }}>
        <Typography variant="h3" align="center" gutterBottom>
          {" "}
          Đăng ký
        </Typography>

        <form
          onSubmit={handleSignUp}
          className={styles.form}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            fullWidth
            label="Tên tài khoản"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Mật khẩu"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            className={styles.registerbtn}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Đăng ký
          </Button>
        </form>
        <Typography variant="body2" className={styles.registerlink}>
          Đã có tài khoản?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Đăng nhập!
          </Link>
        </Typography>
      </Box>
      <div className={styles.mascotcontainer}>
        <img src="mascot.png" alt="Mascot" />
      </div>
    </Container>
  );
}

export default Register;
