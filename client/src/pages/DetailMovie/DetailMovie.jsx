import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Rating,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import styles from "./DetailMovie.module.scss";
import Header from "../../components/Header";
import ScheduleTheater from "../../components/DetailMovie/ScheduleTheater";


const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // State quản lý Dialog
  const scheduleRef = useRef(null); // Tạo ref cho phần ScheduleTheater

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=vi-VN`,
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );

        setMovie(movieResponse.data);
        setCast(creditsResponse.data.cast);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  
  const handleOpen = () => setOpen(true); // Mở Dialog
  const handleClose = () => setOpen(false); // Đóng Dialog

  // Hàm cuộn đến phần ScheduleTheater
  const scrollToSchedule = () => {
    window.scrollTo({
      top: scheduleRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6">Không tìm thấy thông tin phim.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Header/>
      
      <Box className={styles.container}> 
        <Card className={styles.card}>
          <Box className={styles.poster}>
            <Box  
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />  
          </Box>  
          <CardContent className={styles.content}>
            <Typography
              variant="h4"
              className={styles.title}
            >
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={styles.tagline}
            >
              {movie.tagline}
            </Typography>
              
              
            {/* Nút Trailer */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Xem Trailer
            </Button>

            <Button
                variant="contained"
                color="primary"
                onClick={scrollToSchedule} // Cuộn đến phần Đặt vé
              >
                Đặt vé
              </Button>
              
            <Box className={styles.rating}>
              <Rating
                value={movie.vote_average / 2}
                precision={0.5}
                readOnly
              />
              <Typography variant="body1" className={styles.score}> 
                {movie.vote_average.toFixed(1)} / 10
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ marginBottom: "10px", marginLeft: "20px", fontSize: "1.3rem" }}>
              Ngày phát hành:{" "}
              <strong>
                {new Date(movie.release_date).toLocaleDateString("vi-VN")}
              </strong>
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, marginLeft: "20px", marginTop: "35px" }}>
              {movie.overview}
            </Typography>
          </CardContent> 
        </Card>
      
        {/* Cast Section */}
        <Box className={styles.castContainer}>
          <Typography
            variant="h2"
            className={styles.header}
          >
            Diễn viên
          </Typography>
          <Grid container spacing={1}>
            {cast.slice(0, 10).map((actor) => (
              <Grid item xs={6} sm={4} md={3} lg={1} key={actor.id}>
                <Box
                  className={styles.actor}
                >
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className={styles.avatar}
                  />
                  <Typography variant="body2" className={styles.name}>
                    {actor.name}
                  </Typography>
                  <Typography variant="caption" className={styles.character}>
                    {actor.character}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>  
      

        

        {/* Dialog hiển thị trailer */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Trailer</DialogTitle>
          <DialogContent>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${movie.videos?.results?.[0]?.key || "Iqr3XIhSnUQ"}`} // Trailer
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Đóng
            </Button>
          </DialogActions>
        </Dialog>

      </Box>
      <Box sx={{ marginTop: "0px" }} ref={scheduleRef}>
          <ScheduleTheater/>
      </Box>
    </Box>  
  );
}

export default DetailMovie;
