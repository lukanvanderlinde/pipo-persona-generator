import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import './index.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    textAlign: 'center'
  }
}));

function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='modal'>
      <Button size='large' color='secondary' onClick={handleOpen}>
        Saiba mais
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>O que é?</h2>
          <p>
            Uma persona é um modelo ficcional para definir a pessoa ideal para a
            vaga.
          </p>
          <img src='../../assets/images/onboarding-passo-1.png' alt=' ' />
          <Button color='secondary' onClick={handleClose}>
            Voltar
          </Button>
          <Button size='large' variant='contained' color='primary'>
            Próximo
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;
