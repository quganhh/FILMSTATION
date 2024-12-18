
import React, { useState } from "react";
import { Box, Typography, Button, Select, MenuItem, TextField } from "@mui/material";

import styles from "./styles/ScheduleTheater.module.scss";

const cinemaData = [
  {
    name: "Beta Cinemas",
    logo: "Beta.png",
    branches: [
      {
        name: "Beta Trần Quang Khải",
        address:
          "Tầng 2 & 3, Tòa nhà IMC, 62 Đường Trần Quang Khải, Quận 1, TP. Hồ Chí Minh",
        shows: ["13:00", "15:00", "21:30", "23:15"],
      },
      {
        name: "Beta Quang Trung",
        address:
          "Tầng 2 & 3, Tòa nhà IMC, 62 Đường Trần Quang Khải, Quận 1, TP. Hồ Chí Minh",
        shows: ["14:00", "18:00", "20:30"],
      },
    ],
  },
  {
    name: "Mega GS",
    logo: "megaGS.png",
    branches: [
      {
        name: "Mega GS Cao Thắng",
        address: "123 Cao Thắng, Quận 3, TP. Hồ Chí Minh",
        shows: ["11:00", "13:30", "19:45"],
      },
    ],
  },
  {
    name: "CGV Cinemas",
    logo: "cgv.jpg",
    branches: [
      {
        name: "CGV Lý Chính Thắng",
        address: "123 Cao Thắng, Quận 3, TP. Hồ Chí Minh",
        shows: ["11:00", "13:30", "19:45"],
      },
    ],
  },
  {
    name: "Galaxy Cinemas",
    logo: "galaxy.png",
    branches: [
      {
        name: "Galaxy Nguyễn Du",
        address: "123 Cao Thắng, Quận 3, TP. Hồ Chí Minh",
        shows: ["11:00", "13:30", "19:45"],
      },
    ],
  },
  {
    name: "BHD Star",
    logo: "BHD.png",
    branches: [
      {
        name: "BHD Quang Trung",
        address: "123 Cao Thắng, Quận 3, TP. Hồ Chí Minh",
        shows: ["11:00", "13:30", "19:45"],
      },
    ],
  },
];

const dates = [
  { day: "18/12", label: "Th 4" },
  { day: "19/12", label: "Th 5" },
  { day: "20/12", label: "Th 6" },
  { day: "21/12", label: "Th 7" },
  { day: "22/12", label: "CN" },
  { day: "23/12", label: "Th 2" },
];

const ScheduleTheater = () => {
  const [openCinemaIndex, setOpenCinemaIndex] = useState(null);
  const [openBranchIndex, setOpenBranchIndex] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Tp. Hồ Chí Minh");
  const [selectedFormat, setSelectedFormat] = useState("Định dạng");
  const [selectedDate, setSelectedDate] = useState(0);

  // Toggle cụm rạp
  const toggleCinema = (cinemaIndex) => {
    setOpenCinemaIndex(openCinemaIndex === cinemaIndex ? null : cinemaIndex);
    setOpenBranchIndex(null); 
    
  };

  // Toggle chi nhánh
  const toggleBranch = (branchIndex) => {
    setOpenBranchIndex(openBranchIndex === branchIndex ? null : branchIndex);
  };
=======
import React, {useState} from 'react';
import { Box, Button, MenuItem,Collapse, List, ListItemIcon, ListItem, ListItemText, Avatar, Select, FormControl  } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles/ScheduleTheater.module.scss"



const cinemaData = [
  {
    name: 'Mega GS Cinemas',
    branches: ['Mega GS Lý Chính Thắng'],
    logo: 'megaGS.png',
    branchCount: 1,
  },
  {
    name: 'BHD Star Cineplex',
    branches: ['BHD Vincom', 'BHD Lê Văn Việt'],
    logo: 'BHD.png',
    branchCount: 2,
  },
  {
    name: 'CGV Cinemas',
    branches: ['CGV Crescent Mall', 'CGV Hoàng Văn Thụ', 'CGV Landmark 81'],
    logo: 'cgv.jpg',
    branchCount: 10,
  },
  {
    name: 'Galaxy Cinema',
    branches: ['Galaxy Nguyễn Du', 'Galaxy Tân Bình', 'Galaxy Kinh Dương Vương'],
    logo: 'galaxy.png',
    branchCount: 7,
  },
  {
    name: 'Lotte Cinema',
    branches: ['Lotte Gò Vấp', 'Lotte Nam Sài Gòn', 'Lotte Tân Bình'],
    logo: 'lotte.png',
    branchCount: 7,
  },
];

function ScheduleTheater () {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  
  return (
    <Box className={styles.container}>
      <Box className={styles.filterContainer}>
        <TextField
          select 
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          variant="outlined"
          size="small"
          className={styles.filterItem}
        >
          <MenuItem value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</MenuItem>
          <MenuItem value="Hà Nội">Hà Nội</MenuItem>
          <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
        </TextField>

        <TextField
          select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          variant="outlined"
          size="small"
          className={styles.filterItem}
        >
          <MenuItem value="Định dạng">Tất cả</MenuItem>
          <MenuItem value="2D">2D</MenuItem>
          <MenuItem value="3D">3D</MenuItem>
          <MenuItem value="IMAX">IMAX</MenuItem>
        </TextField>
      </Box>


      <Box className={styles.dateSelector}>
        {dates.map((date, index) => (
          <Box
            key={index}
            className={`${styles.dateItem} ${
              selectedDate === index ? styles.activeDate : ""
            }`}
            onClick={() => setSelectedDate(index)}
          >
            <Typography className={styles.dateDay}>{date.day}</Typography>
            <Typography className={styles.dateLabel}>{date.label}</Typography>
          </Box>
        ))}
      </Box>


      {cinemaData.map((cinema, cinemaIndex) => (
        <Box key={cinemaIndex} className={styles.cinemaGroup}>
          <Box
            className={styles.cinemaHeader}
            onClick={() => toggleCinema(cinemaIndex)}
          >
            <img src={cinema.logo} alt="logo" className={styles.cinemaLogo} />
            <Typography className={styles.cinemaTitle}>{cinema.name}</Typography>
   
          </Box>

          {/* Danh sách chi nhánh */}
          {openCinemaIndex === cinemaIndex &&
            cinema.branches.map((branch, branchIndex) => (
              <Box key={branchIndex} className={styles.branch}>
                <Box
                  className={styles.branchHeader}
                  onClick={() => toggleBranch(branchIndex)}
                >
                  <Typography className={styles.branchName}>
                    {branch.name}
                  </Typography>
                  
                </Box>

                {/* Suất chiếu */}
                {openBranchIndex === branchIndex && (
                  <Box className={styles.showTimes}>
                    <Typography className={styles.branchAddress}>
                      {branch.address}
                    </Typography>
                    <Box className={styles.showButtons}>
                      {branch.shows.map((time, timeIndex) => (
                        <Button
                          key={timeIndex}
                          className={styles.timeButton}
                          variant="outlined"
                        >
                          {time} 
                        </Button>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      ))}
        <Box className={styles.filterBar}>
          <FormControl className={styles.filterCity}>
            <Select defaultValue="Hồ Chí Minh">
              <MenuItem value="Hồ Chí Minh">Tp. Hồ Chí Minh</MenuItem>
              <MenuItem value="Hà Nội">Hà Nội</MenuItem>
              <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={styles.filterFormat}>
            
            <Select defaultValue="Định dạng">
              <MenuItem value="Định dạng">Tất cả</MenuItem>
              <MenuItem value="2D">2D</MenuItem>
              <MenuItem value="3D">3D</MenuItem>
            </Select>
          </FormControl>
        </Box>

      <Box className={styles.date_selector}>
        {[18, 19, 20, 21, 22, 23].map((day) => (
          <Button key={day} className={styles.dateBTN}>
            {`${day}/11`} <br /> Th {day % 7 || 7}
          </Button>
        ))}
      </Box>

      <List className={styles.cinemaList}>
      {cinemaData.map((cinema, index) => (
        <Box key={index}>
          <ListItem
            className={styles.cinemaList_item}
            onClick={() => handleToggle(index)}
            button
          >
            <ListItemIcon>
              <Avatar src={cinema.logo} alt={cinema.name} className={styles.cinemaList_logo} />
            </ListItemIcon>
            <ListItemText
              primary={cinema.name}
              secondary={`${cinema.branchCount} rạp`}
            />
            {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={styles.cinemaList_branches}>
              {cinema.branches.map((branch, branchIndex) => (
                <ListItem key={branchIndex} className="cinema-list__branch">
                  <ListItemText primary={branch} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
    </Box>
  );
};

export default ScheduleTheater;
