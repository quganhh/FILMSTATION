import React from "react";
import { Button } from "@mui/material";

const Seat = ({ seat, onSelect }) => {
  const getColor = () => {
    if (seat.status === "selected") return "success"; // Ghế đã chọn (màu xanh)
    if (seat.status === "sold") return "grey"; // Ghế đã bán
    if (seat.type === "VIP") return "warning"; // Ghế VIP (màu vàng)
    return "default"; // Ghế Standard
  };

  return (
    <Button
      variant="contained"
      color={getColor()}
      onClick={() => onSelect(seat)}
      disabled={seat.status === "sold"}
      sx={{ width: 40, height: 40, margin: "5px" }}
    >
      {seat.label}
    </Button>
  );
};

export default Seat;
