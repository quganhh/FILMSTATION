import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import styles from "./styles/DateTabs.module.scss";

function DateTabs({ tabIndex, handleChange, showtimes }){
  return (
    <Box className={styles.dateTabsContainer}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: 'none' } }}
        className={styles.dateTabs}
      >
        {showtimes.map((day, index) => (
          <Tab
            key={day.id}
            className={`date-tab ${tabIndex === index ? 'active' : ''}`}
            label={
              <Box className={styles.tabContent}>
                <Typography className={styles.date} variant="body1">
                  {day.date}
                </Typography>
                <Typography className={styles.day} variant="body2">
                  {day.day}
                </Typography>
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default DateTabs;