import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@mui/material";
import styles from "./Movies.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const TMDB_API_KEY = "bc1e436c524b5144e3ec840831e92aa8";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState("Tất cả");
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?language=vi-VN&page=1`,
          {
            params: {
              api_key: TMDB_API_KEY,
            },
          }
        );
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterChange = (value) => {
    setAnchorEl(null);
    setFilter(value);

    if (value === "Tất cả") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(getGenreId(value))
      );
      setFilteredMovies(filtered);
    }
  };

  const getGenreId = (genreName) => {
    const genres = {
      "Hành động": 28,
      "Phiêu lưu": 12,
      "Hoạt hình": 16,
      Hài: 35,
      "Tội phạm": 80,
      "Tài liệu": 99,
      "Kinh dị": 27,
      "Tâm lý": 18,
      "Gia đình": 10751,
      "Khoa học viễn tưởng": 878,
    };
    return genres[genreName] || null;
  };

  return (
    <Box className={styles.container}>
      <Header />

      <CardMedia component="div" className={styles.banner}>
        <img
          src="/moviesbanner.png"
          alt="Movies Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <Box className={styles.bannerOverlay}>
          <Typography variant="h4" className={styles.pageTitle}>
            Phim đang chiếu
          </Typography>
          <Typography variant="body1" className={styles.pageDescription}>
            Danh sách các phim hiện đang chiếu rạp trên toàn quốc 12/12/2024.
            Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!
          </Typography>
        </Box>
      </CardMedia>

      {/* Filter Menu */}
      <Box className={styles.filterContainer}>
        <Button variant="contained" color="primary" onClick={handleMenuClick}>
          {filter}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleFilterChange("Tất cả")}>
            Tất cả
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Hành động")}>
            Hành động
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Kinh dị")}>
            Kinh dị
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Tâm lý")}>
            Tâm lý
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Hài")}>Hài</MenuItem>
          <MenuItem onClick={() => handleFilterChange("Gia đình")}>
            Gia đình
          </MenuItem>
        </Menu>
      </Box>

      {/* Movies List */}
      {loading ? (
        <Box className={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2} className={styles.moviesGrid}>
          {filteredMovies.map((movie) => (
            <Grid item xs={4} sm={3} md={2} key={movie.id}>
              <Card className={styles.movieCard}>
                <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
                  <CardMedia
                    component="img"
                    alt={movie.title}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className={styles.moviePoster}
                  />
                  <CardContent>
                    <Typography variant="h6" className={styles.movieTitle}>
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={styles.movieDate}
                    >
                      {new Date(movie.release_date).toLocaleDateString("vi-VN")}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Footer />
    </Box>
  );
}

export default Movies;
