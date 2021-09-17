import { Image } from '@material-ui/icons';
import { Card, CardMedia, Container, Paper } from '@mui/material';
import React from 'react';
import banner from './img/Grupo2403.png';

const styles = {
  paperContainer: {
    height: 857,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgoundRepeat: 'no-repeat',
    backgroundImage: `url(${banner})`
  }
};
const BannerIMG = () => {
  return (
    <div>
      <Container style={styles.paperContainer} >
        
      </Container>
      {/* <Container sx={{
        backgroundImage: `url(${banner})`,
        maxWidth: 'lg',
      }} >
        teste
      </Container> */}

    </div>
  );
}

export default BannerIMG
