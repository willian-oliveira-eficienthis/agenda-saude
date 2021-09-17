import React from 'react'
import { Container, Grid} from '@mui/material'
import CardMedicos from './CardMedicos'

const Profissionais = props => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <h2>  Nossos melhores profissionais</h2>
          </Grid>
          <Grid item md={12}>
            Não sabe qual profissional escolher? Confira quem são os melhores de cada especialidade, de acordo com quem usa o Agenda Saúde!
          </Grid>
          <Grid item md={3}>
          <CardMedicos nomeMedico="Ricardo Hespanhol" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  />
          </Grid>
          <Grid item md={3}>
          <CardMedicos nomeMedico="Natália Lopes" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Profissionais.propTypes = {

}

export default Profissionais

