import { Container } from "@material-ui/core";
import React from "react";


const BannerPrincipal = props => {
  return(
    <div>
      <Container className='bannerPrincipal' maxWidth='lg' >

        <div  >
          <p> Bem vindo ao <span>Agenda Saúde</span> </p>
          <p> Simples, transparente <br/> e Inovadora! </p>
          <p>Inspirado em você, o Agenda Saúde nasceu, para deixar o agendamento da sua consulta masi fácio e rápida</p> 

        </div>
      </Container>
    </div>
  );
}
export default BannerPrincipal 