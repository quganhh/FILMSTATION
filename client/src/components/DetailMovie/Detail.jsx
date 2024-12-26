import React, { useState } from 'react';
import { Button, Typography, Box, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styles from './styles/DetailMovie.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Detail() {
    // State để kiểm soát mở/đóng dialog
    const [open, setOpen] = useState(false);

    // Mở dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Đóng dialog
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
    <main className={styles.main}>
        <Box className={styles.container1}>

            <Box className={styles.button}>
                <Button className={styles.btnTrailer} variant="outlined" onClick={handleClickOpen}>
                    <Typography className={styles.typo3}>Trailer</Typography>
                </Button>
            </Box>
            {/* Modal hiển thị video YouTube */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
              <DialogTitle>Trailer</DialogTitle>
              <DialogContent>
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/HyIyd9joTTc" //video YouTube (link embed(nhúng))
                  title="YouTube video player" 
                  frameBorder="0" 
                  //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Đóng
                </Button>
              </DialogActions>
            </Dialog>           
        </Box>         
    </main>
  );
}

export default Detail;