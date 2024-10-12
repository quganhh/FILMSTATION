import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./styles/MovieList.module.scss";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});

function MovieList() {
  const classes = useStyles();
  // Dummy movie data
  const movies = [
    { title: "Quỷ Nhập Tràng", description: "Description for movie 1" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    { title: "The Flash", description: "Description for movie 2" },
    // Add more movies as needed
  ];

  return (
    <Container>
      <Box className={styles.main}>
        <Typography variant="h5" gutterBottom>
          Sắp chiếu
        </Typography>
        <Grid container spacing={2}>
          {movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography variant="body2">{movie.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12}>
            <Box>
              <CardMedia component="img" height="700" src="/news.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MovieList;
