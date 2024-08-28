import React from "react";
// import './MainContent.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

function MainScreen() {
  return (
    <main className="main-content">
      <Header />
      <MovieList />
      <Footer />
    </main>
  );
}

export default MainScreen;
