import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className={styles.container}>
      <div className="login-box">
        <Typography variant="h4" component="h2" className="login-title">
          Đăng nhập
        </Typography>

        <form>
          <div className="input-group">
            <TextField
              label="Tài khoản"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <TextField
              label="Mật khẩu"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
            />
            <Link href="/" className="forgot-password" underline="hover">
              Quên mật khẩu?
            </Link>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="login-btn"
            >
              Đăng nhập
            </Button>
          </Link>
        </form>
        <Typography variant="body2" className="register-link">
          Chưa có tài khoản?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Đăng kí ngay!
          </Link>
        </Typography>
      </div>
      <div className="mascot-container">
        <img src="mascot.png" alt="Mascot" />
      </div>
    </main>
  );
}

export default Login;
