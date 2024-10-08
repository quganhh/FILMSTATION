import React from "react";
import { AppBar, Typography, Button, Toolbar, InputBase } from "@mui/material";
import styles from "./styles/Header.module.scss";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

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
  return (
    <AppBar position="static" className={styles.main} sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Grid container spacing={2} className={styles.firstGrid}>
          <Grid xs={7} md={7} lg={7}>
            <Button className={styles.button1}>Đặt vé xem phim</Button>
            <Button className={styles.button2}>Lịch chiếu phim</Button>
            <Button className={styles.button2}>Rạp</Button>
            <Button className={styles.button2}>Tin Tức</Button>
            <Button className={styles.button2}>Cộng đồng</Button>
          </Grid>
          <Grid xs={2} md={2} lg={2} className={styles.secondGrid}>
            <Typography variant="h6" className={styles.logo}>
              Film Station
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={3} md={3} lg={3} className={styles.thirdGrid}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
