import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const BookingSummary = ({ selectedSeats, totalPrice }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Thông tin đặt vé</Typography>
      <Typography>
        Ghế đã chọn: {selectedSeats.join(", ") || "Chưa chọn ghế"}
      </Typography>
      <Typography>Tổng tiền: {totalPrice} đ</Typography>
      <Link to="/order">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Tiếp tục
        </Button>
      </Link>
    </Paper>
  );
};

export default BookingSummary;
