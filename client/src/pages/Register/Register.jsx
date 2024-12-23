import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link, IconButton  } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Register.module.scss";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Thông tin được set cứng
  const hardcodedData = {
    username: "legiangson",
    email: "legiangson@example.com",
    password: "123456",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu nhập
    if (
      formData.username === hardcodedData.username &&
      formData.email === hardcodedData.email &&
      formData.password === hardcodedData.password &&
      formData.password === formData.confirmPassword
    ) {
      // Chuyển hướng nếu thông tin hợp lệ
      window.location.href = "/welcome"; // Thay bằng đường dẫn khác
    } else {
      // Hiển thị lỗi nếu không khớp
      setErrorMessage("Thông tin không hợp lệ hoặc mật khẩu xác nhận không khớp.");
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
      
      <Box        
        className={styles.box}
        sx={{ flex: 1, mr: 3, textAlign: "center" }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Đăng ký
        </Typography>
        <form
          onSubmit={handleSubmit}
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
          {errorMessage && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
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
          Đã có tài khoản?{' '}
          <Link href="/Login" underline="hover">
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
