import React from 'react';
import { Grid, Button } from '@material-ui/core';

const Nav = ({ Previus, Next, AdapterLink, NextStep, PreviusStep }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={3}>
        <Button
          size='small'
          color='secondary'
          component={AdapterLink}
          to={Previus}
          onClick={PreviusStep}>
          Voltar
        </Button>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={3}>
        <Button
          size='small'
          variant='contained'
          color='primary'
          component={AdapterLink}
          to={Next}
          onClick={NextStep}>
          Próximo
        </Button>
      </Grid>
    </Grid>
  );
};

export default Nav;
