import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const TMDB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(TMDB_SEARCH_URL, {
            params: {
              api_key: "bc1e436c524b5144e3ec840831e92aa8",
              language: "vi-VN",
              query,
            },
          });
          setMovies(response.data.results || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Kết quả tìm kiếm cho "{query}"
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {movies.length ? (
          movies.map((movie) => (
            <Card key={movie.id} sx={{ width: 200 }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="subtitle1" noWrap>
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(movie.release_date).toLocaleDateString("vi-VN")}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>Không tìm thấy kết quả nào.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default SearchResult;
