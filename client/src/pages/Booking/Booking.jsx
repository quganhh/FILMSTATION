import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MovieList from "../../components/MovieList";
import styles from "../../../src/pages/Booking/Booking.module.scss";
function Booking() {
  return (
    <Box>
      <Header />
      <Box className={styles.main}>
        <Typography className={styles.typo1}>Mua vé xem phim</Typography>
        <MovieList />
      </Box>
      <Footer />
    </Box>
  );
}
export default Booking;
