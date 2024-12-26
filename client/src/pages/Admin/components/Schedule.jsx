import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@mui/material";
import styles from "./styles/Schedule.module.scss";

// Mock data
const scheduleData = [
    {
      date: "2024-12-25",
      movies: [
        {
          title: "Nhím Sonic 3 ",
          theaters: [
            { name: "MegaGS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Quái Vật Từ Lòng Đất",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            
          ],
        },
        {
            title: "Kraven: Thợ Săn Thủ Lĩnh",
            theaters: [
              { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
              { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
              { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
              { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
              
            ],
          },
      ],
    },
    {
      date: "2024-12-26",
      movies: [
        {
          title: "Kẻ Dị Giáo",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Chuộc Lỗi",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
    {
      date: "2024-12-27",
      movies: [
        {
          title: "Anora",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Survival",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
    {
      date: "2024-12-28",
      movies: [
        {
          title: "Adventure Begins",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Sci-Fi Legacy",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
    {
      date: "2024-12-29",
      movies: [
        {
          title: "Comedy Nights",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Romantic Escape",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
    {
      date: "2024-12-30",
      movies: [
        {
          title: "The Mystery Case",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Fantasy World",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
    {
      date: "2024-12-31",
      movies: [
        {
          title: "New Year's Eve Bash",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
        {
          title: "Countdown Chronicles",
          theaters: [
            { name: "Mega GS Cao Thắng", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
            { name: "Mega GS Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "CGV Lý Chính Thắng", showtimes: ["11:00 AM", "2:00 PM", "8:00 PM"] },
            { name: "Galaxy Nguyễn Du", showtimes: ["10:00 AM", "12:30 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"] },
          ],
        },
      ],
    },
  ];
  

function ScheduleManagement() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);
  
    const handleSelectDate = (date) => {
      setSelectedDate(date);
      setSelectedMovie(null);
      setSelectedTheater(null);
    };
  
    const handleSelectMovie = (movie) => {
      setSelectedMovie(movie);
      setSelectedTheater(null);
    };
  
    const handleSelectTheater = (theater) => {
      setSelectedTheater(theater);
    };
  
    const handleUpdate = () => {
      
    };
  
    const handleDelete = () => {

    };
  
    return (
      <Box className={styles.container}>
        <Box className={styles.header}>
          <Typography variant="h4" gutterBottom>
            Quản Lý Lịch Chiếu
          </Typography>
        </Box>
        <Divider />
  
        {/* Horizontal Layout */}
        <Box className={styles["horizontal-layout"]}>
          {/* Date Selection */}
          <Box className={styles.section}>
            <Typography className={styles["section-title"]}>Ngày chiếu</Typography>
            <List className={styles.list}>
              {scheduleData.map((item) => (
                <ListItem
                  button
                  key={item.date}
                  onClick={() => handleSelectDate(item.date)}
                  className={`${styles["list-item"]} ${
                    item.date === selectedDate ? styles.selected : ""
                  }`}
                >
                  <ListItemText
                    primary={item.date}
                    className={styles["item-text"]}
                  />
                </ListItem>
              ))}
            </List>
            {selectedDate && (
              <Box className={styles.actions}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleUpdate("Date")}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete("Date")}
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
  
          {/* Movies by Selected Date */}
          <Box className={styles.section}>
            <Typography className={styles["section-title"]}>
              Các phim chiếu trong ngày {selectedDate}
            </Typography>
            {selectedDate ? (
              <List className={styles.list}>
                {scheduleData
                  .find((item) => item.date === selectedDate)
                  ?.movies.map((movie) => (
                    <ListItem
                      button
                      key={movie.title}
                      onClick={() => handleSelectMovie(movie)}
                      className={`${styles["list-item"]} ${
                        movie === selectedMovie ? styles.selected : ""
                      }`}
                    >
                      <ListItemText
                        primary={movie.title}
                        className={styles["item-text"]}
                      />
                    </ListItem>
                  ))}
              </List>
            ) : (
              <Typography></Typography>
            )}
            {selectedMovie && (
              <Box className={styles.actions}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleUpdate("Movie")}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete("Movie")}
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
  
          {/* Theaters by Selected Movie */}
          <Box className={styles.section}>
            <Typography className={styles["section-title"]}>
              Các rạp đang chiếu {selectedMovie?.title}
            </Typography>
            {selectedMovie ? (
              <List className={styles.list}>
                {selectedMovie.theaters.map((theater) => (
                  <ListItem
                    button
                    key={theater.name}
                    onClick={() => handleSelectTheater(theater)}
                    className={`${styles["list-item"]} ${
                      theater === selectedTheater ? styles.selected : ""
                    }`}
                  >
                    <ListItemText
                      primary={theater.name}
                      className={styles["item-text"]}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography></Typography>
            )}
            {selectedTheater && (
              <Box className={styles.actions}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleUpdate("Theater")}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete("Theater")}
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
  
          {/* Showtimes by Selected Theater */}
          <Box className={styles.section}>
            <Typography className={styles["section-title"]}>
              Suất chiếu tại {selectedTheater?.name}
            </Typography>
            {selectedTheater ? (
              <List className={styles.list}>
                {selectedTheater.showtimes.map((time, index) => (
                  <ListItem key={index} className={styles["list-item"]}>
                    <ListItemText
                      primary={time}
                      className={styles["item-text"]}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography></Typography>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default ScheduleManagement;
