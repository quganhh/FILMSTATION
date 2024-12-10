import React, {useState} from 'react';
import { Box, Button, MenuItem,Collapse, List, ListItemIcon, ListItem, ListItemText, Avatar, Select, FormControl  } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./styles/ScheduleTheater.module.scss"



const cinemaData = [
  {
    name: 'Mega GS Cinemas',
    branches: ['Mega GS Lý Chính Thắng'],
    logo: 'megaGS.png',
    branchCount: 1,
  },
  {
    name: 'BHD Star Cineplex',
    branches: ['BHD Vincom', 'BHD Lê Văn Việt'],
    logo: 'BHD.png',
    branchCount: 2,
  },
  {
    name: 'CGV Cinemas',
    branches: ['CGV Crescent Mall', 'CGV Hoàng Văn Thụ', 'CGV Landmark 81'],
    logo: 'cgv.jpg',
    branchCount: 10,
  },
  {
    name: 'Galaxy Cinema',
    branches: ['Galaxy Nguyễn Du', 'Galaxy Tân Bình', 'Galaxy Kinh Dương Vương'],
    logo: 'galaxy.png',
    branchCount: 7,
  },
  {
    name: 'Lotte Cinema',
    branches: ['Lotte Gò Vấp', 'Lotte Nam Sài Gòn', 'Lotte Tân Bình'],
    logo: 'lotte.png',
    branchCount: 7,
  },
];


function ScheduleTheater () {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  
  return (
    <Box className={styles.container}>
        <Box className={styles.filterBar}>
          <FormControl className={styles.filterCity}>
            <Select defaultValue="Hồ Chí Minh">
              <MenuItem value="Hồ Chí Minh">Tp. Hồ Chí Minh</MenuItem>
              <MenuItem value="Hà Nội">Hà Nội</MenuItem>
              <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={styles.filterFormat}>
            
            <Select defaultValue="Định dạng">
              <MenuItem value="Định dạng">Tất cả</MenuItem>
              <MenuItem value="2D">2D</MenuItem>
              <MenuItem value="3D">3D</MenuItem>
            </Select>
          </FormControl>
        </Box>

      <Box className={styles.date_selector}>
        {[18, 19, 20, 21, 22, 23].map((day) => (
          <Button key={day} className={styles.dateBTN}>
            {`${day}/11`} <br /> Th {day % 7 || 7}
          </Button>
        ))}
      </Box>

      <List className={styles.cinemaList}>
      {cinemaData.map((cinema, index) => (
        <Box key={index}>
          <ListItem
            className={styles.cinemaList_item}
            onClick={() => handleToggle(index)}
            button
          >
            <ListItemIcon>
              <Avatar src={cinema.logo} alt={cinema.name} className={styles.cinemaList_logo} />
            </ListItemIcon>
            <ListItemText
              primary={cinema.name}
              secondary={`${cinema.branchCount} rạp`}
            />
            {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={styles.cinemaList_branches}>
              {cinema.branches.map((branch, branchIndex) => (
                <ListItem key={branchIndex} className="cinema-list__branch">
                  <ListItemText primary={branch} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
    </Box>
  );
};

export default ScheduleTheater;
