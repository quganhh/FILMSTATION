import React from 'react';
import { Button, Typography, Box, CardMedia } from '@mui/material';
import styles from './styles/DetailMovie.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';




function Detail() {
  return (
    <main className={styles.main}>
        <CardMedia className={styles.img} component="img" src="/VenomMoviebanner.jpg"/>
        <Box className={styles.container1}>
            
            <Box className = {styles.detail}>
                <img className={styles.img1} src="/MovieVenom.jpg"/>
                <Typography className={styles.typo1}>Venom: Kèo Cuối</Typography>
                <Typography className={styles.typo2}>Venom: The Last Dance - Action, Adventure, Science Fiction</Typography>
            </Box>

            <Box className={styles.button}>
                <Button className={styles.btnFavorite} variant="outlined" startIcon={<FavoriteBorderIcon />}>
                    <Typography className={styles.typo3}>Thích</Typography>
                </Button>
                <Button className={styles.btnAsess} variant="outlined" startIcon={<StarBorderIcon />}>
                    <Typography className={styles.typo3}>Đánh giá</Typography>
                </Button>
                <Button className={styles.btnTrailer} variant="outlined">
                    <Typography className={styles.typo3}>Trailer</Typography>
                </Button>
                <Button className={styles.btnBuyTicket} variant="outlined">
                    <Typography className={styles.typo3}>Mua vé</Typography>
                </Button>
            </Box>

            <Box className ={styles.des1}>
                <Typography className={styles.typo4}>Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote.</Typography>
            </Box>

            <Box className={styles.des2}>
                <Box className={styles.likeRate}>
                    <Typography className={styles.typo5}>Hài lòng</Typography>
                    <Typography className={styles.typo5}>95%</Typography>
                </Box>
                <Box className={styles.premiere}>
                    <Typography className={styles.typo5}>Khởi chiếu</Typography>
                    <Typography className={styles.typo4}>25/10/2024</Typography>
                </Box>
                <Box className={styles.duration}>
                    <Typography className={styles.typo5}> Thời lượng</Typography>
                    <Typography className={styles.typo4}>109 phút</Typography>
                </Box>
                <Box className={styles.ageLimit}>
                    <Typography className={styles.typo5}>Giới hạn tuổi</Typography>
                    <Typography className={styles.typo5}>T13</Typography>
                </Box>
            </Box>

            <Box className={styles.des3}>
                <Box className={styles.actor}>
                    <Typography  className={styles.typo5}>Diễn viên</Typography>
                    <Typography  className={styles.typo6}>Tom Hardy, Chiwetel Ejiofor, Juno Temple, Peggy Lu, Rhys Ifans</Typography>
                </Box>
                <Box className={styles.director}>
                    <Typography  className={styles.typo5}>Đạo diễn</Typography>
                    <Typography  className={styles.typo6}>Kelly Marcel</Typography>
                </Box>
                <Box className={styles.producer}>
                    <Typography  className={styles.typo5}>Nhà sản xuất</Typography>
                    <Typography  className={styles.typo6}>Avi Arad, Kelly Marcel, Tom Hardy</Typography>
                </Box>
            </Box>
            
        </Box>         
    </main>
  );
}

export default Detail;
