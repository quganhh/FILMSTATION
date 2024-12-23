import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Avatar,
  MenuItem,

} from "@mui/material";
import styles from './Profile.module.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Profile() {
  return (

  <Box>
    <Header/>
      <Container maxWidth="md" className={styles.profileContainer}>


<Box className={styles.headerSection}>
  <Avatar
    alt="Profile Picture"
    src="/avt.jpeg"
    className={styles.avatar}
  />
  <Typography variant="h5" className={styles.username}>
    ANHLE5502 
  </Typography>
</Box>


{/* Form Section */}
<Box component="form" className={styles.formSection}>
  <TextField
    label="Tên tài khoản"
    defaultValue="AnhLe55"
    fullWidth
    margin="normal"
    InputProps={{ readOnly: true }}
  />
  <TextField
    label="Họ và tên"
    defaultValue="Anh Le"
    fullWidth
    margin="normal"
  />
  <TextField
    label="Email"
    defaultValue="leducanh5502@gmail.com"
    fullWidth
    margin="normal"
  />
  <Box className={styles.horizontalFields}>
      <TextField
      label="Số điện thoại"
      defaultValue="0123 456 789"
      fullWidth
      margin="normal"
      />
      <TextField
      select
      label="Khu vực"
      defaultValue="Tp. Hồ Chí Minh"
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
    <Button variant="outlined" component="label" className={styles.browseButton}>
      Browse
      <input hidden accept="image/*" type="file" />
    </Button>
  </Box>
</Box>

  <Button
    variant="contained"
    color="primary"
    className={styles.updateButton}
  >
    Cập nhật
  </Button>
</Box>
</Container>

    <Footer/>
  </Box>  
    
  );
}

export default Profile;
