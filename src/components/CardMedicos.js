import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from 'prop-types';
import React from "react";
//pegar os dados do servidor!!!
const CardMedicos = ({nomeMedico, descricao, }) => {

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia className={clsx("primeiraClasse", "segundaClasse")} // exemplo passar varias classes 
            component="img"
            alt={nomeMedico}
            height="398"
            image='./img/Medico01.png'
            title={`Dr. ${nomeMedico}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Especialidade
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Descrição: {descricao}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Agendar Consulta
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
CardMedicos.propTypes = {
  nomeMedico:PropTypes.string,
  descricao:PropTypes.string,
  especialidade:PropTypes.string,
  medicoProfile:PropTypes.string,
}
export default CardMedicos