import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SimpleModal from '../SimpleModal';

import './index.css';

const PipoHeader = () => {
  return (
    <header className='header'>
      <Typography variant='h1'>Bem vindo ao gerador de personas</Typography>
      <Typography variant='body1'>
        Crie a Persona Ideal para vaga que você precisa preencher e compartilhe
        esse perfil com todo o seu time!
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
