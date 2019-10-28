import React from 'react';

import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  TextField
} from '@material-ui/core';

import './index.css';

import TemplatePDF from './TemplatePDF';

import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

const PersonaPDF = ({ match }) => {
  let leadEmail = '';
  const webhookURL = 'https://hooks.zapier.com/hooks/catch/5678459/o21sllz/';
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
    <Box className='block-overflow'>
      <Container className='block-overflow'>
        <Grid container spacing={10} justify='center'>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box textAlign='center'>
                  <Typography variant='h1'>
                    Sua persona está pronta! 🙌
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign='left'>
                  <Typography variant='body1'>
                    Clique no botão abaixo para baixar seu documento, não se
                    preocupe ele está em A4 e você pode imprimir onde quiser!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} className='show-in-print'>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box textAlign='center'>
                  <Typography variant='h1'>Só falta baixar!</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign='left'>
                  <Typography variant='body1'>
                    1. Coloque seu email no campo abaixo. <br />
                    2. Clique no botão para baixar. <br />
                    3. Não se preocupe ele está em A4 e você pode imprimir onde
                    quiser!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* PDF */}
          <Grid item xs={8} className='hide-in-print'>
            <TemplatePDF formValues={formValues} />
          </Grid>
        </Grid>
      </Container>

      {/* FLOATING */}
      <Box className='email-converter'>
        <Grid container justify='flex-end' alignItems='center' spacing={4}>
          <Grid item xs={5}>
            <TextField
              autoFocus={true}
              fullWidth={true}
              id='outlined-email-input'
              label='Email'
              type='email'
              name='email'
              autoComplete='email'
              margin='normal'
              variant='outlined'
              onChange={(event) => {
                leadEmail = event.target.value;
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant='contained'
              color='secondary'
              size='small'
              onClick={() => {
                if (leadEmail) {
                  const input = document.getElementById('persona-pdf-template');
                  const request = new XMLHttpRequest();
                  const payload = {
                    payload: {
                      email: leadEmail
                    }
                  };

                  request.open('POST', webhookURL, true);
                  request.setRequestHeader(
                    'Content-Type',
                    'application/x-www-form-urlencoded'
                  );
                  request.send(JSON.stringify(payload));
                  window.scrollTo(0, 0);

                  html2canvas(input).then((canvas) => {
                    const imgData = canvas.toDataURL('image/jpg', 1.0);
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
                    pdf.save('persona.pdf');
                    localStorage.removeItem('form-response');
                  });
                }
              }}>
              Baixar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonaPDF;
