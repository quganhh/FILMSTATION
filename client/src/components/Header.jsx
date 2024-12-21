import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  InputBase,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styles from "./styles/Header.module.scss";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={styles.main} sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={7} className={styles.firstGrid}>
            <Link to="/">
              <Button className={styles.button1}>Đặt vé xem phim</Button>
            </Link>
            <Link to="movies">
              <Button className={styles.button2}>Lịch chiếu phim</Button>
              <Button className={styles.button2}>Lịch chiếu</Button>
            </Link>
            <Link to="movies">
              <Button className={styles.button2}>Phim</Button>
            </Link>
            <Link to="theater">
              <Button className={styles.button2}>Rạp</Button>
            </Link>
            <Link to="news">
              <Button className={styles.button2}>Tin Tức</Button>
            </Link>
            <Link to="social">
              <Button className={styles.button2}>Cộng đồng</Button>
            </Link>
          </Grid>
          <Grid item xs={2} className={styles.secondGrid}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" className={styles.logo}>
                Film Station
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={3} className={styles.thirdGrid}>
            <Box display="flex" alignItems="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className={styles.searchIcon} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  className={styles.searchBar}
                />
              </Search>
              <IconButton
                size="large"
                edge="end"

                onClick={handleMenu}
                className={styles.profile}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Trang cá nhân</MenuItem>
                <MenuItem onClick={handleClose}>Quản lý tài khoản</MenuItem>
                <MenuItem onClick={handleClose}>Lịch sử mua vé</MenuItem>
                <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
