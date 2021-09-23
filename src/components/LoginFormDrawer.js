import { Container, Divider, Grid, TextField } from "@material-ui/core";
import React from "react";

const LoginFormDrawer = props => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <button>Sair</button>
        </Grid>
        <Grid>
          <Grid item>
            <span> Olá, </span><br />
            <p>Seja Bem Vindo</p>
          </Grid>
        </Grid>
        <Divider />
        <Grid>
          <TextField id="login" label="Digite aqui o seu CPF ou seu E-mail" variant="outlined" />
        </Grid>
      </Grid>{/* final grid container */}

    </div >
  )
}

export default LoginFormDrawer
