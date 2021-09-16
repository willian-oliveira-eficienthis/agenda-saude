import { Container, Paper } from '@material-ui/core';
import React from 'react';
import banner from './img/Grupo2403.png';

const BannerIMG = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Paper variant='outlined'>
          {/* <img src='../../public/img/Grupo2403.png' alt='Banner APP' /> */}
          <img src={banner} alt='Banner App'/>
        </Paper>
      </Container>
     
    </div>
  );
}

export default BannerIMG
