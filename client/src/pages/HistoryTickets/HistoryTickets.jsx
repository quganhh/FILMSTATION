import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import Header from "../../components/Header";
//import styles from "./TicketHistory.module.scss";


function TicketHistory() {
  const [ticketHistory, setTicketHistory] = useState([]);

  const handleClearHistory = () => {
    setTicketHistory([]);
  };

  return (
    <Box>
      <Header />
      <Box >
        <Typography variant="h4" gutterBottom>
          Lịch Sử Mua Vé
        </Typography>

        {ticketHistory.length > 0 ? (
          <List>
            {ticketHistory.map((ticket, index) => (
              <ListItem key={index}  divider>
                <ListItemText
                  primary={`Phim: ${ticket.movieName}`}
                  secondary={`Rạp: ${ticket.theaterName} | Ngày: ${ticket.showDate} | Giờ: ${ticket.showTime}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="h6" color="textSecondary">
            Bạn chưa có lịch sử mua vé.
          </Typography>
        )}

        {ticketHistory.length > 0 && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearHistory}
            
          >
            Xóa lịch sử
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default TicketHistory