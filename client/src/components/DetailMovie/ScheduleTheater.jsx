import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import styles from "./styles/ScheduleTheater.module.scss"

const cities = ["Tp. Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
const formats = ["Định dạng", "2D", "3D", "IMAX"];

const cinemas = [
  { name: "Beta Cinemas", branches: ["Beta Quang Trung", "Beta Ung Văn Khiêm"], logo: "beta-logo.png" },
  { name: "Mega GS Cinemas", branches: ["Mega GS Nguyễn Du"], logo: "mega-gs-logo.png" },
  { name: "BHD Star Cineplex", branches: ["BHD Bitexco", "BHD Vincom 3/2"], logo: "bhd-logo.png" },
  { name: "CGV Cinemas", branches: ["CGV Vincom Đồng Khởi", "CGV Hoàng Văn Thụ"], logo: "cgv-logo.png" },
  { name: "Galaxy Cinema", branches: ["Galaxy Nguyễn Du", "Galaxy Quang Trung"], logo: "galaxy-logo.png" },
  { name: "Lotte Cinema", branches: ["Lotte Nowzone", "Lotte Cộng Hòa"], logo: "lotte-logo.png" },
];

const ScheduleTheater = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedFormat, setSelectedFormat] = useState(formats[0]);

  return (
    <Box className={styles.container}>
      <Box className="filters">
        <TextField
          select
          label="Thành phố"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Định dạng"
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
        >
          {formats.map((format) => (
            <MenuItem key={format} value={format}>
              {format}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box className="date-selector">
        {[18, 19, 20, 21, 22, 23].map((day) => (
          <Button key={day} className="date-button">
            {`${day}/11`} <br /> Th {day % 7 || 7}
          </Button>
        ))}
      </Box>

      <List className="cinema-list">
        {cinemas.map((cinema, index) => (
          <ListItem key={index} className="cinema-item">
            <ListItemAvatar>
              <Avatar src={cinema.logo} alt={cinema.name} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {cinema.name}
                </Typography>
              }
              secondary={`${cinema.branches.length} rạp`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ScheduleTheater;
