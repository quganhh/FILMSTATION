import React, { useState } from "react";
import styles from "./styles/ScheduleTheater.module.scss";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


function ScheduleTheater() {
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
            <Typography className={styles.cinemaTitle}>
              {cinema.name}
            </Typography>

            <Typography className={styles.cinemaTitle}>
              {cinema.name}
            </Typography>
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
                <Link to="/seat" style={{ textDecoration: "none" }}>
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
                </Link>
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
}

export default ScheduleTheater;
