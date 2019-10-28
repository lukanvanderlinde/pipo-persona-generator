import React from 'react';

import { Box, Grid, Typography, Slider } from '@material-ui/core';

import mocinha from '../..//images/mocinha.png';
import logo from '../../images/logo.svg';

export default function TemplatePDF({ formValues }) {
  return (
    <Grid container id='persona-pdf-template'>
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
                    Olá, eu sou sua persona ideal! 👋
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign='left'>
                  <Typography variant='body1'>
                    {`${formValues.idade[0]} anos, ${formValues.vaga}, com ${
                      formValues.senioridade
                    } na área.`}
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
            <Typography variant='body2'>
              {formValues.notas ? formValues.notas : '🙊🙊🙊'}
            </Typography>
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
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='h4'>Experiência</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <Typography variant='caption'>
                            Tempo desejado:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.experiencia} anos
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>Ingles 🇺🇸:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.ingles}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>
                            Espanhol 🇪🇸:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.ingles}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='h4'>Formação</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <Typography variant='caption'>Graduação:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            Graduada em {formValues.graduacao}
                          </Typography>
                        </Grid>
                        {() => {
                          if (formValues.pos) {
                            return (
                              <Box>
                                <Grid item xs={4}>
                                  <Typography variant='caption'>
                                    Pós Graduação:
                                  </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                  <Typography variant='caption'>
                                    {formValues.pos}
                                  </Typography>
                                </Grid>
                              </Box>
                            );
                          }
                        }}
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='h4'>Qualidades</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <Typography variant='caption'>
                            Personalidade:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Box>
                            {() => {
                              let frase = '';

                              for (
                                let i = 0;
                                i < formValues.caracteristicas.length;
                                i++
                              ) {
                                frase = `${formValues.caracteristicas[i]}, ${frase}`;
                              }

                              return (
                                <Typography variant='caption'>
                                  {frase}
                                </Typography>
                              );
                            }}
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>
                            Habilidades:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Box>
                            {() => {
                              let frase = '';

                              for (
                                let i = 0;
                                i < formValues.habilidades.length;
                                i++
                              ) {
                                frase = `${formValues.habilidades[i]}, ${frase}`;
                              }

                              return (
                                <Typography variant='caption'>
                                  {frase}
                                </Typography>
                              );
                            }}
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='box-description'>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='h4'>Vaga</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={3}>
                          <Typography variant='caption'>Nome:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.vaga}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>
                            Senioridade:
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.senioridade}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>Salário:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {`Entre R$:${formValues.salario[0]} e R$:${
                              formValues.salario[1]
                            }`}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant='caption'>Vagas:</Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography variant='caption'>
                            {formValues.disponiveis}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
