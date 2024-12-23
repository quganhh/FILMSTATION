import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import DateTabs from './DateTabs';
import ShowTimeCard from './ShowTimeCard';
import styles from "./styles/TheaterShowtimes.module.scss";


const showtimes = [
  {
    id: 1,
    date: '18/12',
    day: 'Th 4',
    times: [
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Phụ Đề Việt', timeSlots: ['10:30', '14:50', '21:25'] },
      { title: 'Fast and Furios: Quá nhanh quá nguy hiểm', duration: "1h58'", type: '2D Lồng Tiếng', timeSlots: ['12:40', '17:10', '19:10'] },
      { title: 'Kraven Thợ Săn Thủ Lĩnh', duration: "1h48'", type: '2D Phụ Đề Việt', timeSlots: ['11:00', '15:00', '20:00'] },
    ],
  },
  {
    id: 2,
    date: '19/12',
    day: 'Th 5',
    times: [
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Phụ Đề Việt', timeSlots: ['10:30', '14:50', '21:25'] },
      { title: 'Batman: Người Vơi', duration: "1h58'", type: '2D Lồng Tiếng', timeSlots: ['12:40', '17:10', '19:10'] },
      { title: 'Doraemon: Mèo máy đến từ tương lai', duration: "1h48'", type: '2D Phụ Đề Việt', timeSlots: ['11:00', '15:00', '20:00'] },
    ],
  },
  {
    id: 3,
    date: '20/12',
    day: 'Th 6',
    times: [
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Phụ Đề Việt', timeSlots: ['10:30', '14:50', '21:25'] },
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Lồng Tiếng', timeSlots: ['12:40', '17:10', '19:10'] },
      { title: 'Kraven Thợ Săn Thủ Lĩnh', duration: "1h48'", type: '2D Phụ Đề Việt', timeSlots: ['11:00', '15:00', '20:00'] },
    ],
  },
  {
    id: 4,
    date: '21/12',
    day: 'Th 7',
    times: [
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Phụ Đề Việt', timeSlots: ['10:30', '14:50', '21:25'] },
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Lồng Tiếng', timeSlots: ['12:40', '17:10', '19:10'] },
      { title: 'Kraven Thợ Săn Thủ Lĩnh', duration: "1h48'", type: '2D Phụ Đề Việt', timeSlots: ['11:00', '15:00', '20:00'] },
    ],
  },
  {
    id: 5,
    date: '22/12',
    day: 'CN',
    times: [
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Phụ Đề Việt', timeSlots: ['10:30', '14:50', '21:25'] },
      { title: 'Mufasa: Vua Sư Tử', duration: "1h58'", type: '2D Lồng Tiếng', timeSlots: ['12:40', '17:10', '19:10'] },
      { title: 'Kraven Thợ Săn Thủ Lĩnh', duration: "1h48'", type: '2D Phụ Đề Việt', timeSlots: ['11:00', '15:00', '20:00'] },
    ],
  },
];

function TheaterShowtimes(){
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container sx={{ mt: 4 }} className={styles.main}>
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        Rạp Đồng Đa
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Lịch chiếu phim Đồng Đa - Lịch chiếu đầy đủ và tiện lợi nhất tại Moveek.
      </Typography>
      <DateTabs tabIndex={tabIndex} handleChange={handleChange} showtimes={showtimes} />
      <Box>
        {showtimes[tabIndex]?.times.map((movie, index) => (
          <ShowTimeCard key={index} movie={movie} />
        ))}
      </Box>
    </Container>
  );
};

export default TheaterShowtimes;