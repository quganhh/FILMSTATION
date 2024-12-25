// SeatMain.js
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import SeatMap from "./components/SeatMap";
import BookingSummary from "./components/BookingSummary";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat.label)
        ? prev.filter((s) => s !== seat.label)
        : [...prev, seat.label]
    );
  };

  const totalPrice = selectedSeats.length * 100000; // Giá mỗi ghế: 100,000 đ

  const handleNext = () => {
    navigate("/order", { state: { selectedSeats, totalPrice } });
  };

  return (
    <Box>
      <Header />
      <Box p={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SeatMap onSeatSelect={handleSeatSelect} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BookingSummary selectedSeats={selectedSeats} totalPrice={totalPrice} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={selectedSeats.length === 0}
            >
              Tiếp tục
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default BookingPage;