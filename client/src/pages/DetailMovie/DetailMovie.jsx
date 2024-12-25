import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import axios from "axios";
import styles from "./DetailMovie.module.scss";
import ScheduleTheater from "../../components/DetailMovie/ScheduleTheater";

const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <Box className={styles.container} sx={{ padding: "20px" }}>
      <Card sx={{ display: "flex", boxShadow: 3, marginBottom: "20px" }}>
        <Box sx={{ width: "100%", maxWidth: "300px" }}>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Box>
        <CardContent sx={{ padding: "20px", flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: "20px" }}>
            {movie.tagline}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Rating
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
              sx={{ marginRight: "10px" }}
            />
            <Typography variant="body1">
              {movie.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Ngày phát hành:{" "}
            <strong>{new Date(movie.release_date).toLocaleDateString("vi-VN")}</strong>
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            {movie.overview}
          </Typography>
        </CardContent>
      </Card>

      {/* Cast Section */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
        >
          Diễn viên
        </Typography>
        <Grid container spacing={3}>
          {cast.slice(0, 10).map((actor) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={actor.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  sx={{
                    width: 80,
                    height: 80,
                    marginBottom: "10px",
                    boxShadow: 2,
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {actor.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {actor.character}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginTop: "40px" }}>
        <ScheduleTheater />
      </Box>
    </Box>
  );
}

export default DetailMovie;
