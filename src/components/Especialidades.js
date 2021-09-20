import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
// Ver se sou eu que não estou sabendo pegar os arquivos separados ou seu está tudo junto 
//
const Especialidade = props => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <h2>  Buscando um Profissional em Específico</h2>
          </Grid>
          <Grid item md={12}>
            Use nossa Categoria de especialistas
          </Grid>
          <Grid item md={3}>
            <Paper>
              Cardiologista
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              Ortopedista
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              Fisioterapeuta
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              Pediatra
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper> Ginecologista </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>Urologista</Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>Neurologita</Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>Psicólogo</Paper>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

Especialidade.propTypes = {

}

export default Especialidade

