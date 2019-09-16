import React from 'react';

import { Box, Grid, Typography, Slider, makeStyles } from '@material-ui/core';

import mocinha from '../../assets/images/mocinha.png';
import logo from '../../assets/logo.svg';

export default function TemplatePDF({ formValues }) {
  return (
    // <Box className='pdf'>
    <Grid container id='persona-pdf-template' className='pdf-body'>
      {/* COLUNA */}
      <Grid item xs={4} className='side-bar'>
        <Grid container spacing={4}>
          {/* MOCINHA */}
          <Grid item xs={12}>
            <Box textAlign='center'>
              <img className='pdf-mocinha' src={mocinha} alt=' ' />
            </Box>
          </Grid>
          {/* DESCRIÇÃO */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box textAlign='left'>
                  <Typography variant='h2'>
                    Olá, eu sou sua persona ideal!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign='left'>
                  <Typography variant='body1'>
                    {`${formValues.idade[0]} anos, ${formValues.vaga} ${
                      formValues.senioridade
                    }, formada em ${formValues.graduacao}${
                      formValues.pos !== ''
                        ? ` e com especialização em ${formValues.pos}`
                        : ''
                    }, com ${
                      formValues.experiencia
                    } anos de experiência no ramo.`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* SLIDERS */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Slider
                  disabled={true}
                  min={1}
                  max={5}
                  defaultValue={3}
                  valueLabelDisplay='auto'
                  defaultValue={formValues.introvertido}
                  marks={[
                    { value: 2, label: 'INTROVERTIDO' },
                    { value: 4, label: 'EXTROVERTIDO' }
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Slider
                  disabled={true}
                  min={1}
                  max={5}
                  defaultValue={3}
                  valueLabelDisplay='auto'
                  defaultValue={formValues.racional}
                  marks={[
                    { value: 2, label: 'RACIONAL' },
                    { value: 4, label: 'PASSIONAL' }
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Slider
                  disabled={true}
                  min={1}
                  max={5}
                  defaultValue={3}
                  valueLabelDisplay='auto'
                  defaultValue={formValues.flexivo}
                  marks={[
                    { value: 2, label: 'FLEXIVO' },
                    { value: 4, label: 'RIGIDO' }
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Slider
                  disabled={true}
                  min={1}
                  max={5}
                  defaultValue={3}
                  valueLabelDisplay='auto'
                  defaultValue={formValues.passivo}
                  marks={[
                    { value: 2, label: 'PASSIVO' },
                    { value: 4, label: 'ATIVO' }
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* NOTAS */}
          <Grid item xs={12} className='notas'>
            <Typography variant='caption'>Comentários</Typography>
            <Typography variant='body2'>{formValues.notas}</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* GERAL */}
      <Grid item xs={8} className='main-body'>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Box textAlign='left'>
              <Typography variant='h2'>
                Persona
                <Box component='span'>
                  <img
                    className='logo'
                    src={logo}
                    alt='Acessar o site da pipo'
                  />
                </Box>
              </Typography>
            </Box>
            <Box textAlign='left'>
              <Typography variant='h1'>
                <span className='header-vaga'>{formValues.vaga}</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Typography variant='caption'>Experiência</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Typography variant='caption'>Formação</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Typography variant='caption'>Qualidades</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Typography variant='caption'>Caracteristicas</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Typography variant='caption'>Vaga</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Box>
  );
}
