
import { Container, Grid, IconButton, TextField } from "@material-ui/core";
import React from "react";
import { Search } from "@material-ui/icons";
const FormFiltro = props => {
  return (
    <div>
      <Container className='Filtro' maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <TextField fullWidth id="searchLocalizacao" color='primary' label="Buscar Localização" helperText="Usar localização atual" type="search" />
          </Grid>
          <Grid item md={8}>
            <TextField fullWidth id="searchEspecialidadeProcedimento" label="Buscar Profissional" helperText="Buscar por nome, especialidade ou procedimento" type="search" /> 
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}
export default FormFiltro;