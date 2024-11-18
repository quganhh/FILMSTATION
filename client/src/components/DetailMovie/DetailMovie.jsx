import React from 'react';
import { Box} from '@mui/material';
import Header from '../../components/Header';
import Detail from '../../components/DetailMovie/Detail';
import MenuTab from '../../components/DetailMovie/MenuTab';
import ScheduleTheater from '../../components/DetailMovie/ScheduleTheater';
import Footer from "../../components/Footer";


function DetailMovie() {
  return (
    <Box>
        <Header/>
        <Detail/>
        <MenuTab/>
        <ScheduleTheater/>
        <Footer/>
    </Box>

  );
}

export default DetailMovie;
