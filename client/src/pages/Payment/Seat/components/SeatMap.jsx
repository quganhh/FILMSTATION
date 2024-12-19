import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Seat from "./Seat";

const rows = ["A", "B", "C", "D", "E", "F", "G"];
const seatsPerRow = 10;

// Tạo dữ liệu mẫu cho ghế ngồi
const generateSeats = () => {
  let seats = [];
  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      seats.push({
        id: `${row}${i}`,
        label: `${row}${i}`,
        status: Math.random() > 0.8 ? "sold" : "available", // Random trạng thái ghế
        type: i > 5 ? "VIP" : "Standard", // VIP từ cột 6 trở đi
      });
    }
  });
  return seats;
};

const SeatMap = ({ onSeatSelect }) => {
  const [seats, setSeats] = useState(generateSeats());

  const handleSelectSeat = (selectedSeat) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === selectedSeat.id
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            }
          : seat
      )
    );
    onSeatSelect(selectedSeat);
  };

  return (
    <Box>
      <Typography variant="h6" align="center" mb={2}>
        MÀN HÌNH
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {rows.map((row) => (
          <Box key={row} display="flex">
            {seats
              .filter((seat) => seat.label.startsWith(row))
              .map((seat) => (
                <Seat key={seat.id} seat={seat} onSelect={handleSelectSeat} />
              ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SeatMap;
