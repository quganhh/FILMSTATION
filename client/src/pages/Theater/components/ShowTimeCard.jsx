import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const ShowTimeCard = ({ movie }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.type} - {movie.duration}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
          {movie.timeSlots.map((time, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{ mr: 1, mb: 1 }}
            >
              {time}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShowTimeCard;