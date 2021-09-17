import { Container, Grid } from '@mui/material';
import React from 'react';
const Rodape = props => {
  return (
    <div>
      <Container className='footer' maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <p> Não sabe qual profissional escolher? Confira quem são os melhores de cada especialidade, de acordo com quem usa o Agenda Saúde!</p>
          </Grid>
          <Grid item md={4}>
            <span> Links Rápidos </span>
            <ul>
              <li> Início</li>
              <li> Buscar Profissional </li>
              <li> Contato </li>
              <li> Trabalhe Conosco </li>
              <li> Dúvidas Frequentes </li>
              <li> Quero me Cadastrar </li>
            </ul>
          </Grid>
          <Grid item md={4}>
            <p>Contato.</p>
            <p><span class='glyphicon glyphicon-envelope'></span>ouvidoria@agendasaude.com.br</p>
            <p><span class='glyphicon glyphicon-map-marker'></span> Av. Marcelino Pires, 3452 - 79832-4684
              Dourados - MS</p>
            <p><span class='glyphicon glyphicon-phone'></span>(67) 3423-4684 | (67) 9 9165-4896</p>
          </Grid>
          <Grid container className='bottom' alignItems='center'>
            <Grid justifyContent='flex-start' itens md={6}>
              Copyright &copy; 2021 <span className='text-style-bold'>Agenda Saúde</span>. All rights reserved to Eficienthis.
            </Grid>
            <Grid justifyContent='flex-end' itens md={6}>
              Políticas de Privacidade | Termos e Condições
            </Grid>
            
          </Grid>{/* rodapé do rodapeé */}
         
        </Grid>  {/* final do container rodapé */}
      </Container>
    </div>
  );

}
export default Rodape