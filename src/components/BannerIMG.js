import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import React from 'react';
import banner from './img/Grupo2403.png';

const useStyles = makeStyles ({
  banner:{
    padding: 0,
  },
  paperContainer: {
    width: 'inherit',
    height: 857,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    // backgroundRepeat: 'no-repeat',
    // backgroundImage: `url(${banner})`
  }
});
const BannerIMG = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.banner} >
        <img src={banner} className={classes.paperContainer} alt='banner'/>
          
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
