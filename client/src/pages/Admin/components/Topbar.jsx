import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./styles/Topbar.module.scss";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className={styles.main}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 13 }}>
          Dashboard
        </Typography>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Đăng xuất</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
