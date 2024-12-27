import React, { useState } from "react";
import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Login.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Đăng nhập bằng email và mật khẩu
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid; // Lấy userId từ Firebase Auth
  
      // Truy vấn vai trò từ Firestore
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role; // Lấy vai trò từ Firestore
  
        if (role === "admin") {
          alert("Đăng nhập thành công với vai trò Admin!");
          navigate("/admin"); // Điều hướng tới trang Admin
        } else if (role === "user") {
          alert("Đăng nhập thành công với vai trò User!");
          navigate("/"); // Điều hướng tới trang MainScreen
        } else {
          alert("Vai trò không hợp lệ!");
        }
      } else {
        alert("Tài khoản không tồn tại trong hệ thống!");
      }
    } catch (error) {
      alert("Đăng nhập thất bại: " + error.message);
    }
  };

  return (
    <Box className={styles.container}>
      <Box>
        {/* Nút Back dạng icon */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton
            className={styles.backbutton}
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              color: "primary.main",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </Box>
      <Box className={styles.loginbox}>
        <Typography
          variant="h4"
          component="h2"
          style={{ fontWeight: 600 }}
          className={styles.logintitle}
        >
          Đăng nhập
        </Typography>
        <form onSubmit={handleLogin}>
          <Box className={styles.inputgroup}>
            <TextField
              label="Tài khoản"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box className={styles.inputgroup}>
            <TextField
              label="Mật khẩu"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/forgot-password"
              className={styles.forgotpassword}
              underline="hover"
            >
              Quên mật khẩu?
            </Link>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={styles.loginbtn}
          >
            Đăng nhập
          </Button>
        </form>
        <Typography variant="body2" className={styles.registerlink}>
          Chưa có tài khoản?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Đăng kí ngay!
          </Link>
        </Typography>
      </Box>
      <Box className={styles.mascotcontainer}>
        <img src="mascot.png" alt="Mascot" />
      </Box>
    </Box>
  );
}
export default Login;
