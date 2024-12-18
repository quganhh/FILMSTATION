import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import SeatMap from "./components/SeatMap";
import BookingSummary from "./components/BookingSummary";

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat.label)
        ? prev.filter((s) => s !== seat.label)
        : [...prev, seat.label]
    );
  };

  const totalPrice = selectedSeats.length * 100000; // Giá mỗi ghế: 100,000 đ

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <SeatMap onSeatSelect={handleSeatSelect} />
        </Grid>
        <Grid item xs={12} md={4}>
          <BookingSummary
            selectedSeats={selectedSeats}
            totalPrice={totalPrice}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingPage;
