const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// TMDb API Key
const TMDB_API_KEY = 'bc1e436c524b5144e3ec840831e92aa8'; // Thay bằng API Key của bạn

// Get popular movies from TMDb
app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                page: 1,
            },
        });

        const movies = response.data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Lấy poster
        }));

        res.json({ movie: movies });
    } catch (error) {
        console.error('Error fetching movies from TMDb:', error);
        res.status(500).json({ error: 'Failed to fetch movies from TMDb' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
