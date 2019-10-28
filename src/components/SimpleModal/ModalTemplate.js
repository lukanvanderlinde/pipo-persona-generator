import React from 'react';
import {
  makeStyles,
  Button,
  Modal,
  Grid,
  Typography,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    textAlign: 'center',
    borderRadius: '5px'
  }
}));

function ModalTemplate({
  NextStep,
  PreviusStep,
  ModalTitle,
  ModalDesctiption,
  ModalImage,
  HandleClose,
  Open
}) {
  const classes = useStyles();
  const modalStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <Modal open={Open} onClose={HandleClose}>
      <Paper style={modalStyle} className={classes.paper}>
        <Grid container spacing={4}>
          {/* HEADER */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h2'>{ModalTitle}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2'>{ModalDesctiption}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img className='onboarding-img' src={ModalImage} alt=' ' />
          </Grid>

          {/* FOOTER BUTTONS */}
          <Grid item xs={12}>
            <Grid container justify='space-between'>
              <Grid item>
                <Button size='small' color='secondary' onClick={PreviusStep}>
                  Voltar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size='small'
                  variant='contained'
                  color='primary'
                  onClick={NextStep}>
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}

export default ModalTemplate;
