import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";
import Booking from "./pages/Booking/Booking";
import Movie from "./pages/MovieSchedule/Movie";
import News from "./pages/News/News";
import Social from "./pages/Social/Social";
import Theater from "./pages/Theater/Theater";
import Register from "./pages/Register/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/theater" element={<Theater />} />
          <Route path="/news" element={<News />} />
          <Route path="/social" element={<Social />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
