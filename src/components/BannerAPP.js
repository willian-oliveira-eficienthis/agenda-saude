import React from 'react';
import { Button, Fab, Grid, Paper } from "@material-ui/core";
// mudar os bootstrap para material
// pegar a img somento do celular
// procurar vetor do ios e android

const BannerApp = props => {
  return (
    <div className='container-fluid text-center'>
      <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-8'>
          <p>Agende Sua Próxima consulta pelo <span>Agenda Saúde</span></p>
          <p>Sua consulta em um clique!</p>
          <p>É fácil! Em poucos Cliques você Realiza o agendamento da sua consulta <br /> de forma rápida e simplicicada!</p>
        </div>
      </div>
      <div className='row justify-content-end'>
        <div className='col-2'>
          <Fab variant="extended">
            Baixar Agora!
          </Fab>
        </div>
      </div>
      <div className='row'>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={3} > 
            <Paper>
              <Button variant="outlined" color="primary" href="#LINK-ios"> IOS Store </Button>
            </Paper>
          </Grid>  
          <Grid item xs={3}> 
            <Paper>
            <Button variant="outlined" color="primary" href="#LINK-Android"> Androis Store </Button>
            </Paper>
          </Grid>  
        </Grid>
      </div>
    </div>
  );
}
export default BannerApp;
