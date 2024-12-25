import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Avatar,
  MenuItem,
} from "@mui/material";
import styles from "./Profile.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { auth } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Firestore instance

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    avatarUrl: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = doc(db, "users", user.uid); // Tìm document theo userId
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      try {
        await updateDoc(userDoc, {
          ...userData, // Cập nhật toàn bộ dữ liệu từ state
        });
        alert("Thông tin đã được cập nhật!");
      } catch (error) {
        console.error("Lỗi khi cập nhật thông tin:", error);
        alert("Lỗi khi cập nhật thông tin.");
      }
    }
  };

  if (loading) return <Typography>Đang tải...</Typography>;

  return (
    <Box>
      <Header />
      <Container maxWidth="md" className={styles.profileContainer}>
        <Box className={styles.headerSection}>
          <Avatar
            alt="Profile Picture"
            src={userData.avatarUrl || "/default-avatar.png"} // Hiển thị ảnh đại diện
            className={styles.avatar}
          />
          <Typography variant="h5" className={styles.username}>
            {userData.email || "Người dùng"}
          </Typography>
        </Box>

        {/* Form Section */}
        <Box component="form" className={styles.formSection}>
          <TextField
            label="Tên tài khoản"
            defaultValue={auth.currentUser?.email || ""}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Họ và tên"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Box className={styles.horizontalFields}>
            <TextField
              label="Số điện thoại"
              value={userData.phone}
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              select
              label="Khu vực"
              value={userData.region}
              onChange={(e) => setUserData({ ...userData, region: e.target.value })}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</MenuItem>
              <MenuItem value="Hà Nội">Hà Nội</MenuItem>
              <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
            </TextField>
          </Box>

          <Box className={styles.uploadSection}>
            <Typography className={styles.p1}>Ảnh đại diện</Typography>
            <Box className={styles.fileUploadContainer}>
              <TextField
                variant="outlined"
                placeholder="Chọn file"
                InputProps={{ readOnly: true }}
                className={styles.fileInput}
              />
              <Button
                variant="outlined"
                component="label"
                className={styles.browseButton}
              >
                Browse
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setUserData({ ...userData, avatarUrl: url });
                    }
                  }}
                />
              </Button>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            className={styles.updateButton}
            onClick={handleUpdate}
          >
            Cập nhật
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Profile;
