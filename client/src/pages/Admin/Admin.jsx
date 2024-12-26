import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ListMovie from "./components/ListMovie";
import CinemaList from "./components/CinemaList";
import styles from "./Admin.module.scss";
function Admin() {
  const [selected, setSelected] = useState("movies");
  const renderPage = () => {
    switch (selected) {
      case "movies":
        return <ListMovie />;
      case "cinema":
        return <CinemaList />;
      default:
        return <ListMovie />;
    }
  };

  return (
    <Box sx={{ display: "flex" }} className={styles.main}>
      <Topbar />
      <Sidebar setPage={setSelected} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className={styles.contentBox}
      >
        {renderPage()}
      </Box>
    </Box>
  );
}
export default Admin;
