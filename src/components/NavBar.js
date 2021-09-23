import { Button, Container, Grid, SwipeableDrawer } from '@material-ui/core';
import { borderRadius, Box } from '@material-ui/system';
import React, { useState } from 'react';
import logoMenu from './img/logoMenu.svg'
import LoginFormDrawer from './LoginFormDrawer';
const NavBar = props => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const toggleDrawer = () => () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <div>

      <Grid container spacing={2} className='' >
        <Grid item md={2}>
          <img src={logoMenu} alt='logo Menu' />
        </Grid>
        <Grid item md={4}>
          <ul>
            <li> Início</li>
            <li> Profissionais </li>
            <li> Sobre Nós </li>
          </ul>
        </Grid>
        <Grid item md={2}>
          <React.Fragment>
            <Button onClick={toggleDrawer()}>
              Entrar/Cadastrar
            </Button>
            <SwipeableDrawer
              anchor={"right"}
              open={openDrawer}
              onClose={toggleDrawer()}
              onOpen={toggleDrawer()}
            >
              <Box
                sx={{ width: 632, borderRadius:'16px'}}
                borderLeft={1}
                borderRadius={16}
                role="presentation"
                
              >
                <Container maxWidth='sm' className='formulario'>
                  <LoginFormDrawer />
                </Container>


              </Box>
            </SwipeableDrawer>
          </React.Fragment>
        </Grid>


      </Grid>

    </div >
  );

}
export default NavBar