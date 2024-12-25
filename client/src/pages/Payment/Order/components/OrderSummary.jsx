import React from "react";
import { Paper, Typography } from "@mui/material";

const OrderSummary = ({ totalPrice, onNext, onBack }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Thông tin đơn hàng</Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
        Tổng đơn hàng: <strong>{totalPrice.toLocaleString()} đ</strong>
      </Typography>
    </Paper>
  );
};

export default OrderSummary;
