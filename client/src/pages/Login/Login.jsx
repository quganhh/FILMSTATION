import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box, IconButton } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from'./Login.module.scss'



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const hardcodedUsername = 'legiangson';
    const hardcodedPassword = '123456';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Chuyển hướng sang trang khác
      window.location.href = '/trangchu'; // Thay '/trangchu' bằng trang khác
    } else {
      setErrorMessage('Tài khoản hoặc mật khẩu không chính xác.');
    }
  };
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className={styles.container}>
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
      <div className={styles.loginbox}>
        <Typography variant="h4" component="h2" style={{ fontWeight: 600 }} className={styles.logintitle} >
          Đăng nhập
        </Typography>
        <form>
          <div className={styles.inputgroup}>
            <TextField
              label="Tài khoản"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputgroup}>
            <TextField
              label="Mật khẩu"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="/" className={styles.forgotpassword} underline="hover" >
              Quên mật khẩu?
            </Link>
          </div>
          {errorMessage && (
            <Typography color="error" className={styles.errormessage}>
              {errorMessage}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth className={styles.loginbtn} 
          onClick={handleLogin}>
            Đăng nhập
          </Button>
        </form>
        <Typography variant="body2" className={styles.registerlink}>
          Chưa có tài khoản?{' '}
          <Link href="/register" underline="hover">
            Đăng kí ngay!
          </Link>
        </Typography>
      </div>
      <div className={styles.mascotcontainer}>
        <img src="mascot.png" alt="Mascot" />
      </div>
    </main>
  );
}

export default Login;
