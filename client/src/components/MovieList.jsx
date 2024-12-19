import React, { useRef } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./styles/MovieList.module.scss";
import { Link } from "react-router-dom";

const movies = [
  {
    title: "Công Tử Bạc Liêu",
    date: "06/12",
    rating: "68%",
    img: "congtubaclieu.jpg",
  },
  {
    title: "Linh Miêu: Q...",
    date: "22/11",
    rating: "73%",
    img: "linhmieu.jpg",
  },
  {
    title: "Hành Trình C...",
    date: "04/12",
    rating: "100%",
    img: "hanhtrinhcuamoana2.jpg",
  },
  {
    title: "Ngải Quỷ",
    date: "13/12",
    rating: "68%",
    img: "ngaiquy.jpg",
  },
  {
    title: "Gia Đình Hoà...",
    date: "13/12",
    rating: "68%",
    img: "giadinhhoanhao.jpg",
  },
  {
    title: "Tết Âm Hồn",
    date: "06/12",
    rating: "68%",
    img: "tetamhon.jpg",
  },
  {
    title: "Mèo Ma Bé...",
    date: "06/12",
    rating: "68%",
    img: "meomabetha.jpg",
  },
  {
    title: "Chiến Địa Từ...",
    date: "29/11",
    rating: "30%",
    img: "chiendiatuthi.jpeg",
  },
];

function MovieCard() {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box className={styles.Container}>
      <Link to="/detailmovie" style={{ textDecoration: "none" }}>
        <Box
          className="horizontal-scroll"
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            gap: 2,
            paddingBottom: 1,
            cursor: isDragging ? "grabbing" : "grab",
            "::-webkit-scrollbar": { display: "none" },
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {movies.map((movie, index) => (
            <Card
              className={styles.moviecard}
              key={index}
              sx={{
                minWidth: 180,
                scrollSnapAlign: "start",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={movie.img}
                alt={movie.title}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent className={styles.moviecontent}>
                <Typography
                  variant="subtitle1"
                  className={styles.movietitle}
                  noWrap
                >
                  {movie.title}
                </Typography>
                <Box className={styles.movieinfo}>
                  <Typography variant="body2" className={styles.moviedate}>
                    {movie.date}
                  </Typography>
                  {movie.rating && (
                    <Typography variant="body2" className={styles.movierating}>
                      {movie.rating}
                    </Typography>
                  )}
                </Box>

                <Box
                  variant="contained"
                  color="secondary"
                  className={styles.buyticket}
                  size="small"
                >
                  Mua vé
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Link>
    </Box>
  );
}

export default MovieCard;
