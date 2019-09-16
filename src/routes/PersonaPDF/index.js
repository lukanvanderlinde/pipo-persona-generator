import React from 'react';

import { Box, Grid, Container, Typography, Button } from '@material-ui/core';

import './index.css';

import TemplatePDF from './TemplatePDF';
// import { PDFViewer } from '@react-pdf/renderer';

// TODO: PEGAR EMAIL
// TODO: MANDAR PRO WEBHOOK
// TODO: LIBERAR PARA DOWNLOAD DO PDF

const PersonaPDF = ({ match }) => {
  const formValues = JSON.parse(localStorage.getItem('form-response'))
    ? JSON.parse(localStorage.getItem('form-response'))
    : {
        step: 0,
        experiencia: 2,
        idioma: {
          ingles: 'básico',
          espanhol: 'básico'
        },
        idade: [18, 35],
        graduacao: 'Design',
        pos: 'Não',
        caracteristicas: [],
        introvertido: 5,
        racional: 1,
        flexivo: 2,
        passivo: 4,
        redesSociais: {
          facebook: false,
          behance: false,
          medium: false,
          meetup: false,
          reddit: false,
          soundcloud: false,
          stackoverflow: false,
          youtube: false,
          instagram: false,
          twitter: false,
          linkedin: false,
          pinterest: false
        },
        habilidades: [],
        vaga: 'Designer Grafica',
        senioridade: 'Pleno',
        salario: [2000, 5000],
        disponiveis: 1,
        notas:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum, id iusto quis nisi consectetur ducimus distinctio error nam natus ex, suscipit sit voluptate.Vel blanditiis harum nemo distinctio nisi sit!'
      };

  return (
    <Container>
      <Grid container spacing={8} justify='center'>
        <Grid item xs={8} className='hide-in-print'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box textAlign='center'>
                <Typography variant='h1'>Sua persona está pronta!</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign='left'>
                <Typography variant='body1'>
                  Clique no botão abaixo para baixar ou imprimir seu documento,
                  não se preocupe ele está em A4 e você pode imprimir onde
                  quiser!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* PDF */}
        {/* <PDFViewer> */}
        <TemplatePDF formValues={formValues} />
        {/* </PDFViewer> */}
      </Grid>
    </Container>
  );
};

export default PersonaPDF;
