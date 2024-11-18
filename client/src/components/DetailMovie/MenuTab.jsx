import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import styles from './styles/MenuTab.module.scss';




function MenuTab() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
    <Box className={styles.menuTab}>
        <Tabs value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary">
            <Tab label="Thông tin phim" />
            <Tab label="Lịch chiếu" />
            <Tab label="Đánh giá" />
            <Tab label="Tin tức" />
            <Tab label="Mua vé" />
        </Tabs>
        
    </Box>
  );
};

export default MenuTab;
