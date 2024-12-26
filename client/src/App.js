import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";
import Theater from "./pages/Theater/Theater";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Movies from "./pages/Movies/Movies";
import Payment from "./pages/Payment/Payment";
import SeatMain from "./pages/Payment/Seat/SeatMain";
import OrderMain from "./pages/Payment/Order/OrderMain";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/detailmovie/:id" element={<DetailMovie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/theater" element={<Theater />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/seat" element={<SeatMain />} />
          <Route path="/order" element={<OrderMain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
