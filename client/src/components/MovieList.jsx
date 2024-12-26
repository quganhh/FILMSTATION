import React, { useEffect, useState, useRef } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./styles/MovieList.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";
const TMDB_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=vi-VN";

function MovieCard() {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  // Fetch movies from TMDB API
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
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box className={styles.Container}>
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
            <Link
              to={`/detailmovie/${movie.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
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
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default MovieCard;
