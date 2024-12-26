import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";
const TMDB_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=vi-VN";
function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(TMDB_API_URL, {
          params: {
            api_key: TMDB_API_KEY,
          },
        });
        const fetchedMovies = response.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title || movie.original_title,
          date: new Date(movie.release_date).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
          }),
          rating: `${Math.round(movie.vote_average * 10)}%`,
          img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Failed to fetch movies from TMDB:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <Box>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="300"
                image={movie.img}
                alt={movie.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" noWrap>
                  {movie.title}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  fullWidth
                  onClick={() => {
                    // Xử lý sự kiện chỉnh sửa ở đây
                    console.log("Chỉnh sửa phim:", movie._id);
                  }}
                >
                  Chỉnh sửa
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Movies;
