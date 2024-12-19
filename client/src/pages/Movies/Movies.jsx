
import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import styles from './Movies.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

const movies = [
  { title: 'Công Tử Bạc Liêu', date: '06/12', rating: 64, img: 'congtubaclieu.jpg' },
  { title: 'Gia Đình Hoàn Hảo', date: '13/12', rating: 100, img: 'giadinhhoanhao.jpg' },
  { title: 'Mèo Ma Bê Tha', date: '06/12', rating: 100, img: 'meomabetha.jpg' },
  { title: 'TRAPEZIUM', date: '06/12', rating: 100, img: 'trapezium.jpg' },
  { title: 'Wicked', date: '22/11', rating: 86, img: 'wicked.jpg' },
  { title: 'Chiến Địa Tử Thi', date: '29/11', rating: 30, img: 'chiendiatuthi.jpeg' },
  { title: 'Cu Li Không Bao...', date: '15/11', rating: 100, img: 'culikhongbaogiokhoc.jpg' },
  { title: 'Blue Period', date: '29/11', rating: 10, img: 'blueperiod.jpg' },
  { title: 'Võ Sĩ Giác Đấu 2', date: '15/11', rating: 100, img: 'vosigiacdau2.jpg' },
  { title: 'Ngày Ta Đã Yêu', date: '15/11', rating: 100, img: 'ngaytadayeu.jpg' },
  { title: 'Đôi Bạn Học Yêu', date: '08/11', rating: 100, img: 'doibanhocyeu.jpg' },
  { title: 'Thần Dược', date: '01/11', rating: 10, img: 'thanduoc.jpg' },

import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import styles from "./Movies.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const movies = [
  {
    title: "Công Tử Bạc Liêu",
    date: "06/12",
    rating: 64,
    img: "congtubaclieu.jpg",
  },
  {
    title: "Gia Đình Hoàn Hảo",
    date: "13/12",
    rating: 100,
    img: "giadinhhoanhao.jpg",
  },
  { title: "Mèo Ma Bê Tha", date: "06/12", rating: 100, img: "meomabetha.jpg" },
  { title: "TRAPEZIUM", date: "06/12", rating: 100, img: "trapezium.jpg" },
  { title: "Wicked", date: "22/11", rating: 86, img: "wicked.jpg" },
  {
    title: "Chiến Địa Tử Thi",
    date: "29/11",
    rating: 30,
    img: "chiendiatuthi.jpeg",
  },
  {
    title: "Cu Li Không Bao...",
    date: "15/11",
    rating: 100,
    img: "culikhongbaogiokhoc.jpg",
  },
  { title: "Blue Period", date: "29/11", rating: 10, img: "blueperiod.jpg" },
  {
    title: "Võ Sĩ Giác Đấu 2",
    date: "15/11",
    rating: 100,
    img: "vosigiacdau2.jpg",
  },
  {
    title: "Ngày Ta Đã Yêu",
    date: "15/11",
    rating: 100,
    img: "ngaytadayeu.jpg",
  },
  {
    title: "Đôi Bạn Học Yêu",
    date: "08/11",
    rating: 100,
    img: "doibanhocyeu.jpg",
  },
  { title: "Thần Dược", date: "01/11", rating: 10, img: "thanduoc.jpg" },
];

const Movies = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [filter, setFilter] = useState('Tất cả');

  const [filter, setFilter] = useState("Tất cả");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuType = (value) => {
    setAnchorEl(null);
    if (value) setFilter(value);
  };

  const handleMenuLanguage = (value) => {
    setAnchorEl(null);
    if (value) setFilter(value);
  };

  return (
    <Box className={styles.container}>
      <Header />

      <CardMedia className={styles.img} component="img" src="/moviesbanner.png" />

      <CardMedia
        className={styles.img}
        component="img"
        src="/moviesbanner.png"
      />

      <Typography variant="h4" className={styles.pageTitle}>
        Phim đang chiếu
      </Typography>

      <Typography variant="h4" className={styles.desTitle}>

      Danh sách các phim hiện đang chiếu rạp trên toàn quốc 12/12/2024. Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!

        Danh sách các phim hiện đang chiếu rạp trên toàn quốc 12/12/2024. Xem
        lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!

      </Typography>

      {/* Dropdown Buttons */}
      <Grid container spacing={3} className={styles.filterBTN}>
        <Box>

          <Button variant="contained" color="primary"  onClick={handleMenuClick}>

          <Button variant="contained" color="primary" onClick={handleMenuClick}>

            {filter}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuType(null)}
          >

            <MenuItem onClick={() => handleMenuType('Thể loại')}>Tất cả</MenuItem>
            <MenuItem onClick={() => handleMenuType('Kinh dị')}>Kinh dị</MenuItem>
            <MenuItem onClick={() => handleMenuType('Tâm lý')}>Tâm lý</MenuItem>
            <MenuItem onClick={() => handleMenuType('Hành động')}>Hành động</MenuItem>
            <MenuItem onClick={() => handleMenuType('Gia đình')}>Gia đình</MenuItem>
            <MenuItem onClick={() => handleMenuType('Hài')}>Hài</MenuItem>
            <MenuItem onClick={() => handleMenuType('Tình cảm')}>Tình cảm</MenuItem>

            <MenuItem onClick={() => handleMenuType("Thể loại")}>
              Tất cả
            </MenuItem>
            <MenuItem onClick={() => handleMenuType("Kinh dị")}>
              Kinh dị
            </MenuItem>
            <MenuItem onClick={() => handleMenuType("Tâm lý")}>Tâm lý</MenuItem>
            <MenuItem onClick={() => handleMenuType("Hành động")}>
              Hành động
            </MenuItem>
            <MenuItem onClick={() => handleMenuType("Gia đình")}>
              Gia đình
            </MenuItem>
            <MenuItem onClick={() => handleMenuType("Hài")}>Hài</MenuItem>
            <MenuItem onClick={() => handleMenuType("Tình cảm")}>
              Tình cảm
            </MenuItem>

          </Menu>
        </Box>
      </Grid>

      {/* Movies Grid */}
      <Grid container spacing={2} className={styles.moviesGrid}>

  {movies.map((movie, index) => (
    <Grid item key={index}>
      <Card className={styles.movieCard}>
        <CardMedia
          component="img"
          alt={movie.title}
          image={movie.img}
        />
        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>

          <Box className={styles.info}>
            <Typography className={styles.date} variant="body2" color="textSecondary">
                {movie.date}
            </Typography>
            {movie.rating !== null && (
             <Typography
                variant="body2"
                className={`${styles.rating} ${
                    movie.rating >= 50 ? styles.positive : styles.negative
                }`}
                >
                {movie.rating}%
            </Typography>
          )}
          </Box>
        
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      <Footer/>

        {movies.map((movie, index) => (
          <Grid item key={index}>
            <Card className={styles.movieCard}>
              <CardMedia component="img" alt={movie.title} image={movie.img} />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>

                <Box className={styles.info}>
                  <Typography
                    className={styles.date}
                    variant="body2"
                    color="textSecondary"
                  >
                    {movie.date}
                  </Typography>
                  {movie.rating !== null && (
                    <Typography
                      variant="body2"
                      className={`${styles.rating} ${
                        movie.rating >= 50 ? styles.positive : styles.negative
                      }`}
                    >
                      {movie.rating}%
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Footer />

    </Box>
  );
};

export default Movies;
