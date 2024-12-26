import React, { useState } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

function RoomList({ selectedCinema }) {
  const [rooms, setRooms] = useState(["P01", "P02", "P03", "P04", "P05"]);
  const [newRoom, setNewRoom] = useState("");

  const handleAddRoom = () => {
    if (newRoom) {
      setRooms([...rooms, newRoom]);
      setNewRoom("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Paper sx={{ width: 200 }}>
        <List>
          {rooms.map((room, index) => (
            <ListItem key={index}>
              <ListItemText primary={room} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Tên phòng"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
          />
          <Button
            sx={{ mt: 1 }}
            fullWidth
            variant="contained"
            onClick={handleAddRoom}
          >
            Thêm
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5">{selectedCinema}</Typography>
        <Typography variant="body1">Thuộc thành phố: Hà Nội</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 1 }}>
          Cập nhật
        </Button>
        <Button variant="contained" color="error" sx={{ mt: 2 }}>
          Xóa
        </Button>
      </Paper>
    </Box>
  );
}

export default RoomList;
