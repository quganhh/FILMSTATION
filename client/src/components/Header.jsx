import React, { useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setAnchorEl(null);
    } catch (error) {
      alert("Lỗi khi đăng xuất: " + error.message);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar position="static" className={styles.main} sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={7} md={4} className={styles.firstGrid}>
            <Link to="/">
              <Button className={styles.button1}>Đặt vé xem phim</Button>
            </Link>
            <Link to="movies">
              <Button className={styles.button2}>Lịch chiếu</Button>
            </Link>
            <Link to="movies">
              <Button className={styles.button2}>Phim</Button>
            </Link>
          </Grid>
          <Grid item xs={2} md={4} className={styles.secondGrid}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" className={styles.logo}>
                FILMSTATION
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={3} md={4} className={styles.thirdGrid}>
            <Box display="flex" alignItems="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className={styles.searchIcon} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  className={styles.searchBar}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Search>

              {isLoggedIn ? (
                <>
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
                    <Link to="/profile">
                      <MenuItem onClick={handleClose}>Trang cá nhân</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                      Quản lý tài khoản
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Lịch sử mua vé
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>Đăng xuất</MenuItem>
                  </Menu>
                </>
              ) : (
                <Link to="login">
                  <Button>Login</Button>
                </Link>
              )}
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
