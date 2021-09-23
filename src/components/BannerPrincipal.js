import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import bannerPrincipal from './img/bannerPricipal.png'

const useStyles = makeStyles({
  BannerPrincipal: {
    // padding: 0,
  },
  root:{
    color: '#fff',
  },
  bannerContainer: {
    position: 'relative',
    width: 'inherit',
    height: 600,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
  },
  imgContainer:{
    width: '100%'

  },
  textContainet: {
    position: 'absolute',
    left: 111,
    top: 150,
  },
  bemVindo: {
    fontFamily: 'Poppins',
    fontSize: 55,
    fontWeight: 800,
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.49,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',
  },
  agendaSaude:{
    color:'#46d5cb',
  },
  fonteBannerPrincipal:{
    paddingLeft:-24,
    paddingRight: -24,
    fontWeight: 800,
    color: '#fff',
    fontSize: 38,
    
  },
  fonteBannerBase: {
    width: 648,
    height: 79,
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#fff',

  }

});

const BannerPrincipal = props => {
  const classes = useStyles();
  return (
    <div maxWidth='lg'>
      <Container className={classes.bannerPrincipal} >
        <img src={bannerPrincipal} className={classes.imgContainer} alt='banner' />
        <div className={classes.textContainet} >
          <p className={classes.bemVindo}> Bem vindo ao <span className={classes.agendaSaude}>Agenda Saúde</span> </p>
          <p className={classes.fonteBannerPrincipal}> Simples, transparente <br /> e Inovadora! </p>
          <p className={classes.fonteBannerBase}>Inspirado em você, o Agenda Saúde nasceu, para deixar o agendamento da sua consulta mais fácil e rápida</p>

        </div>
      </Container>
    </div>
  );
}
export default BannerPrincipal