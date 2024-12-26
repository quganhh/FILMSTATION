import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const cinemaData = [
  { name: "Lotte Hà Nội", rooms: 8 },
  { name: "BHD Hà Nội", rooms: 6 },
  { name: "CGV Đà Nẵng", rooms: 10 },
  { name: "Lotte Đà Nẵng", rooms: 7 },
  { name: "CGV HCM", rooms: 12 },
  { name: "Lotte HCM", rooms: 9 },
];

function CinemaList() {
  const [selectedCinema, setSelectedCinema] = React.useState(cinemaData[0]);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Paper sx={{ width: 300, height: "100%", overflowY: "auto" }}>
          <List>
            {cinemaData.map((cinema, index) => (
              <ListItemButton
                key={index}
                onClick={() => setSelectedCinema(cinema)}
                selected={cinema.name === selectedCinema.name}
              >
                <ListItemText primary={cinema.name} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper sx={{ p: 2, height: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Sơ đồ phòng - {selectedCinema.name}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {[...Array(selectedCinema.rooms)].map((_, index) => (
              <Paper
                key={index}
                sx={{
                  width: 100,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "grey.100",
                }}
              >
                <Typography>Phòng {index + 1}</Typography>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CinemaList;
