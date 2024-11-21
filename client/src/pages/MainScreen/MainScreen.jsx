import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MovieList from "../../components/MovieList";
import styles from "./MainScreen.module.scss";

function MainScreen() {
  return (
    <main className="main-content">
      <Header />
      <Box className={styles.main}>
        <Typography className={styles.typo1} variant="h5" gutterBottom>
          Đang chiếu
        </Typography>
        <MovieList />
        <Box>
          <CardMedia component="img" height="700" src="/news.png" />
        </Box>
      </Box>
      <Footer />
    </main>
  );
}

export default MainScreen;
