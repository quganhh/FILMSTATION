import React from "react";
import { IconButton } from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair"; 

const Seat = ({ seat, onSelect }) => {
  const getColor = () => {
    if (seat.status === "selected") return "success"; // Ghế đã chọn (màu xanh)
    if (seat.status === "sold") return "grey"; // Ghế đã bán
    if (seat.type === "VIP") return "warning"; // Ghế VIP (màu vàng)
    return "default"; // Ghế Standard
  };

  return (
    <IconButton
      //variant="contained"
      color={getColor()}
      onClick={() => onSelect(seat)}
      disabled={seat.status === "sold"}
      sx={{ width: 45, height: 45, margin: "15px",  }}
    >
      <ChairIcon fontSize="small" />
      {seat.label}
    </IconButton>
  );
};

export default Seat;
