import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import styles from "./styles/Sidebar.module.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Man4Icon from "@mui/icons-material/Man4";
function Sidebar({ setPage }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={styles.main}
      >
        <Avatar sx={{ width: 56, height: 56, mb: 1 }} />
        <Typography variant="h6">Admin</Typography>
      </Box>

      <Divider />
      <List>
        <ListItemButton onClick={() => setPage("movies")}>
          <MovieIcon sx={{ mr: 2 }} />
          <ListItemText primary="Quản lý phim" />
        </ListItemButton>

        <ListItemButton onClick={() => setPage("cinema")}>
          <TheaterComedyIcon sx={{ mr: 2 }} />
          <ListItemText primary="Quản lý rạp chiếu phim" />
        </ListItemButton>
      </List>

      <Divider />
      <List>
        <ListItemButton>
          <EventSeatIcon sx={{ mr: 2 }} />
          <ListItemText primary="Quản lý lịch chiếu phim" />
        </ListItemButton>
        <ListItemButton>
          <AttachMoneyIcon sx={{ mr: 2 }} />
          <ListItemText primary="Quản lý thanh toán" />
        </ListItemButton>
        <ListItemButton>
          <Man4Icon sx={{ mr: 2 }} />
          <ListItemText primary="Quản lý người dùng" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;
