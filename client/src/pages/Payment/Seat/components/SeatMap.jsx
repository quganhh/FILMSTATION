import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Seat from "./Seat";
import Styles from "./SeatMap.module.scss"

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
      <Box display="flex" justifyContent="center" mb={2}>
        {/* Legend (Chú thích) */}
        <Box display="flex" alignItems="center" mx={1}>
          <Button
            sx={{
              width: 20,
              height: 20,
              backgroundColor: "grey",
              cursor: "default",
            }}
            variant="contained"
          />
          <Typography ml={1}>Ghế thường</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={1}>
          <Button
            sx={{
              width: 20,
              height: 20,
              backgroundColor: "orange",
              cursor: "default",
            }}
            variant="contained"
          />
          <Typography ml={1}>Ghế VIP</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={1}>
          <Button
            sx={{
              width: 20,
              height: 20,
              backgroundColor: "grey",
              cursor: "default",
            }}
            variant="contained"
            disabled
          />
          <Typography ml={1}>Ghế đã bán</Typography>
        </Box>
      </Box>
      
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
