import React from "react";
import { Paper, Typography } from "@mui/material";


const BookingSummary = ({ selectedSeats, totalPrice }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Thông tin đặt vé</Typography>
      <Typography>
        Ghế đã chọn: {selectedSeats.join(", ") || "Chưa chọn ghế"}
      </Typography>
      <Typography>Tổng tiền: {totalPrice} đ</Typography>


    </Paper>
  );
};

export default BookingSummary;
