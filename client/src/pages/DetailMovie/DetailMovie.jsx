import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Rating,
  Grid,
  Avatar,
} from "@mui/material";
import axios from "axios";
import styles from "./DetailMovie.module.scss";
import ScheduleTheater from '../../components/DetailMovie/ScheduleTheater'


const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";

function DetailMovie() {
  const { id } = useParams(); // Lấy ID phim từ URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Lấy thông tin chi tiết phim
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=vi-VN`,
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );

        // Lấy danh sách diễn viên
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
    <Box className={styles.container}>
      <Box className={styles.card}>
        <Grid container>
          {/* Poster Image */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.poster}
            />
          </Grid>

          {/* Movie Info */}
          <Grid item xs={12} md={8}>
            <Box className={styles.content}>
              <Typography variant="h4" className={styles.title}>
                {movie.title}
              </Typography>
              <Typography variant="body1" className={styles.tagline}>
                {movie.tagline}
              </Typography>

              <Box className={styles.rating}>
                <Rating
                  value={movie.vote_average / 2}
                  precision={0.5}
                  readOnly
                  className={styles.stars}
                />
                <Typography variant="body1">
                  {movie.vote_average.toFixed(1)} / 10
                </Typography>
              </Box>

              <Typography variant="body1" className={styles.releaseDate}>
                Ngày phát hành:{" "}
                <strong>
                  {new Date(movie.release_date).toLocaleDateString("vi-VN")}
                </strong>
              </Typography>

              <Typography variant="body2" className={styles.overview}>
                {movie.overview}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Cast Section */}
        <Box className={styles.castSection}>
          <Typography variant="h5" className={styles.castTitle}>
            Diễn viên
          </Typography>
          <Grid container spacing={2}>
            {cast.slice(0, 10).map((actor) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={actor.id}>
                <Box className={styles.castCard}>
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className={styles.castAvatar}
                  />
                  <Typography variant="body2" className={styles.castName}>
                    {actor.name}
                  </Typography>
                  <Typography variant="body2" className={styles.castRole}>
                    {actor.character}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <ScheduleTheater/>
    </Box>
  );
}

export default DetailMovie;
