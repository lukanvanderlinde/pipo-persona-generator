import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SimpleModal from '../SimpleModal';

import './index.css';

const PipoHeader = () => {
  return (
    <header className='header'>
      <Typography variant='h1'>
        Olá 👋 Vamos criar o perfil de candidato ideal?
      </Typography>
      <Typography variant='body1'>
        Com o Gerador de Candidatos da Pipo, você cria e compartilha a persona
        do seu candidato ideal para que todos possam entender quem é a pessoa
        certa para a vaga.
      </Typography>
      <React.Fragment>
        <Button
          size='large'
          variant='contained'
          color='primary'
          onClick={() => {
            const elmnt = document.getElementById('form-content');
            elmnt.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
          Vamos lá
        </Button>
        <SimpleModal />
      </React.Fragment>
    </header>
  );
};

export default PipoHeader;
