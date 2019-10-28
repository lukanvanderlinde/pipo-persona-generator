import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Slider,
  OutlinedInput,
  Grid,
  Typography,
  Box
} from '@material-ui/core/';

import Behance from '../../icons/Behance';
import Facebook from '../../icons/Facebook';
import Instagram from '../../icons/Instagram';
import Linkedin from '../../icons/Linkedin';
import Medium from '../../icons/Medium';
import Meetup from '../../icons/Meetup';
import Pinterest from '../../icons/Pinterest';
import Reddit from '../../icons/Reddit';
import SoundCloud from '../../icons/SoundCloud';
import StackOverflow from '../../icons/StackOverflow';
import Twitter from '../../icons/Twitter';
import Youtube from '../../icons/Youtube';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import FormNav from './FormNav';
import RangeSlider from '../RangeSlider';

import ChipInput from 'material-ui-chip-input';

class FormPagination extends Component {
  state = JSON.parse(localStorage.getItem('form-response'))
    ? JSON.parse(localStorage.getItem('form-response'))
    : {
        step: 0,
        experiencia: 2,
        idioma: {
          ingles: 'básico',
          espanhol: 'básico'
        },
        idade: [18, 35],
        graduacao: '',
        pos: '',
        caracteristicas: [],
        introvertido: 3,
        racional: 3,
        flexivo: 3,
        passivo: 3,
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
        vaga: '',
        senioridade: '',
        salario: [2000, 5000],
        disponiveis: 0,
        notas: ''
      };

  constructor(props) {
    super(props);
    if (this.props.formsPage) this.state.step = parseInt(this.props.formsPage);
  }

  AdapterLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
  ));

  NextStep = () => {
    let { step } = this.state;
    this.setState({ step: ++step });
    localStorage.setItem('form-response', JSON.stringify(this.state));
  };

  PreviusStep = () => {
    let { step } = this.state;
    this.setState({ step: --step });
    localStorage.setItem('form-response', JSON.stringify(this.state));
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ');
    }
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 0:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  CONTE SOBRE A EXPERIÊNCIA ESPERADA DO DA SUA PERSONA
                </Typography>
              </Grid>

              {/* EXPERIENCIA */}
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Quantos anos de experiência profissional sua persona ideal
                      deveria ter?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      step={2}
                      min={0}
                      max={16}
                      valueLabelDisplay='auto'
                      defaultValue={this.state.experiencia}
                      onChangeCommitted={(event, value) => {
                        this.setState({ experiencia: value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* IDIOMA INGLES */}
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Sua persona precisa falar inglês? 🇺🇸
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ToggleButtonGroup
                      value={this.state.ingles}
                      color='primary'
                      exclusive
                      size='small'
                      onChange={(event, value) => {
                        this.setState({ ingles: value });
                      }}>
                      <ToggleButton value='Básico' color='primary'>
                        Básico
                      </ToggleButton>
                      <ToggleButton value='Intermediário' color='primary'>
                        Intermediário
                      </ToggleButton>
                      <ToggleButton value='Avançado' color='primary'>
                        Avançado
                      </ToggleButton>
                      <ToggleButton value='Fluente' color='primary'>
                        Fluente
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>

              {/* IDIOMA ESPANHOL */}
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>E que tal espanhol? 🇪🇸</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ToggleButtonGroup
                      value={this.state.espanhol}
                      color='primary'
                      exclusive
                      size='small'
                      onChange={(event, value) => {
                        this.setState({ espanhol: value });
                      }}>
                      <ToggleButton value='Básico' color='primary'>
                        Básico
                      </ToggleButton>
                      <ToggleButton value='Intermediário' color='primary'>
                        Intermediário
                      </ToggleButton>
                      <ToggleButton value='Avançado' color='primary'>
                        Avançado
                      </ToggleButton>
                      <ToggleButton value='Fluente' color='primary'>
                        Fluente
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>

              {/* EXPERIENCIA */}
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Qual deveria ser a idade da sua persona?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <RangeSlider
                      min={18}
                      max={70}
                      valueLabelDisplay='age'
                      defaultValue={this.state.idade}
                      onChangeCommitted={(event, value) => {
                        this.setState({ idade: value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <FormNav
                Next={'/1'}
                AdapterLink={this.AdapterLink}
                NextStep={this.NextStep}
                PreviusStep={() => {
                  const elmnt = document.getElementById('header-content');
                  elmnt.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              />
            </Grid>
          </Box>
        );
        break;
      case 1:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  Para comerçar, vamos falar de formação acadêmica.
                </Typography>
              </Grid>

              {/* GRADUAÇÃO */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Seu candidato ideal possui Graduação Superior? Qual curso?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      onKeyPress={this.handleKeyPress}
                      id='component-outlined'
                      placeholder='Qual curso?'
                      fullWidth
                      defaultValue={this.state.graduacao}
                      onChange={(event) => {
                        this.setState({ graduacao: event.target.value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* PÓS GRADUAÇÃO */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      E Pós-Graduação? Qual tipo?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      onKeyPress={this.handleKeyPress}
                      id='component-outlined'
                      placeholder='Qual especialização?'
                      fullWidth
                      defaultValue={this.state.pos}
                      onChange={(event) => {
                        this.setState({ pos: event.target.value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <FormNav
              Previus={'/0'}
              Next={'/2'}
              AdapterLink={this.AdapterLink}
              NextStep={this.NextStep}
              PreviusStep={this.PreviusStep}
            />
          </Box>
        );
        break;
      case 2:
        return (
          <Box>
            <Grid container spacing={8}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  Como é a personalidade desta pessoa?
                </Typography>
              </Grid>

              {/* HABILIDADES */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Defina algumas palavras-chave para te ajudar.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ChipInput
                      fullWidth
                      value={this.state.caracteristicas}
                      variant='outlined'
                      allowDuplicates={false}
                      helperText='Definir até 9 caracteristicas'
                      placeholder='Ex: Pro-atividade, organização…'
                      label='Caracteristicas'
                      onAdd={(chip) => {
                        if (this.state.caracteristicas.length < 9) {
                          this.setState(() =>
                            this.state.caracteristicas.push(chip)
                          );
                        }
                      }}
                      onDelete={(chip, index) =>
                        this.setState(() =>
                          this.state.caracteristicas.pop(index)
                        )
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* PERSONALIDADE */}
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      E como é o perfil comportamental?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      min={1}
                      max={5}
                      defaultValue={3}
                      valueLabelDisplay='off'
                      defaultValue={this.state.introvertido}
                      onChangeCommitted={(event, value) => {
                        this.setState({ introvertido: value });
                      }}
                      marks={[
                        { value: 1, label: 'INTROVERTIDO' },
                        { value: 5, label: 'EXTROVERTIDO' }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      min={1}
                      max={5}
                      defaultValue={3}
                      valueLabelDisplay='off'
                      defaultValue={this.state.racional}
                      onChangeCommitted={(event, value) => {
                        this.setState({ racional: value });
                      }}
                      marks={[
                        { value: 1, label: 'RACIONAL' },
                        { value: 5, label: 'PASSIONAL' }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      min={1}
                      max={5}
                      defaultValue={3}
                      valueLabelDisplay='off'
                      defaultValue={this.state.flexivo}
                      onChangeCommitted={(event, value) => {
                        this.setState({ flexivo: value });
                      }}
                      marks={[
                        { value: 1, label: 'FLEXIVO' },
                        { value: 5, label: 'RIGIDO' }
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      min={1}
                      max={5}
                      defaultValue={3}
                      valueLabelDisplay='off'
                      defaultValue={this.state.passivo}
                      onChangeCommitted={(event, value) => {
                        this.setState({ passivo: value });
                      }}
                      marks={[
                        { value: 1, label: 'PASSIVO' },
                        { value: 5, label: 'ATIVO' }
                      ]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <FormNav
              Previus={'/1'}
              Next={'/3'}
              AdapterLink={this.AdapterLink}
              NextStep={this.NextStep}
              PreviusStep={this.PreviusStep}
            />
          </Box>
        );
        break;
      case 3:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  Alguma habilidade específica?
                </Typography>
              </Grid>

              {/* QUALIDADES */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Defina abaixo quais são aquelas habilidades que não podem
                      faltar no CV.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ChipInput
                      fullWidth
                      value={this.state.habilidades}
                      variant='outlined'
                      allowDuplicates={false}
                      helperText='Definir até 9 habilidades'
                      placeholder='Ex: Pro-atividade, organização…'
                      label='Habilidades'
                      onAdd={(chip) => {
                        if (this.state.habilidades.length < 9) {
                          this.setState(() =>
                            this.state.habilidades.push(chip)
                          );
                        }
                      }}
                      onDelete={(chip, index) =>
                        this.setState(() => this.state.habilidades.pop(index))
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* REDES SOCIAIS */}
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Quais redes socias ela usaria?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='behance'
                              selected={this.state.redesSociais.behance}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.behance = !_redesSociais.behance;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Behance />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='facebook'
                              selected={this.state.redesSociais.facebook}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.facebook = !_redesSociais.facebook;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Facebook />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='instagram'
                              selected={this.state.redesSociais.instagram}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.instagram = !_redesSociais.instagram;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Instagram />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='linkedin'
                              selected={this.state.redesSociais.linkedin}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.linkedin = !_redesSociais.linkedin;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Linkedin />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='medium'
                              selected={this.state.redesSociais.medium}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.medium = !_redesSociais.medium;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Medium />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='meetup'
                              selected={this.state.redesSociais.meetup}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.meetup = !_redesSociais.meetup;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Meetup />
                            </ToggleButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='pinterest'
                              selected={this.state.redesSociais.pinterest}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.pinterest = !_redesSociais.pinterest;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Pinterest />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='Reddit'
                              selected={this.state.redesSociais.Reddit}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.Reddit = !_redesSociais.Reddit;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Reddit />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='soundcloud'
                              selected={this.state.redesSociais.soundcloud}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.soundcloud = !_redesSociais.soundcloud;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <SoundCloud />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='stackoverflow'
                              selected={this.state.redesSociais.stackoverflow}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.stackoverflow = !_redesSociais.stackoverflow;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <StackOverflow />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='twitter'
                              selected={this.state.redesSociais.twitter}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.twitter = !_redesSociais.twitter;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Twitter />
                            </ToggleButton>
                          </Grid>
                          <Grid item xs={2}>
                            <ToggleButton
                              value='youtube'
                              selected={this.state.redesSociais.youtube}
                              onChange={() => {
                                const _redesSociais = this.state.redesSociais;
                                _redesSociais.youtube = !_redesSociais.youtube;
                                this.setState({
                                  redesSociais: _redesSociais
                                });
                              }}>
                              <Youtube />
                            </ToggleButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <FormNav
              Previus={'/2'}
              Next={'/4'}
              AdapterLink={this.AdapterLink}
              NextStep={this.NextStep}
              PreviusStep={this.PreviusStep}
            />
          </Box>
        );
        break;
      case 4:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  agora vamos definir uma vaga que ela poderia ocupar
                </Typography>
              </Grid>

              {/* VAGA */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Qual o nome da posição que ela irá ocupar?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      onKeyPress={this.handleKeyPress}
                      id='component-outlined'
                      placeholder='Vaga'
                      fullWidth
                      defaultValue={this.state.vaga}
                      onChange={(event) => {
                        this.setState({ vaga: event.target.value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* SENIORIDADE */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>E qual o nível?</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ToggleButtonGroup
                      value={this.state.senioridade}
                      color='primary'
                      exclusive
                      size='small'
                      onChange={(event, value) => {
                        this.setState({ senioridade: value });
                      }}>
                      <ToggleButton value='Estágio' color='primary'>
                        Estágio
                      </ToggleButton>
                      <ToggleButton value='Trainee' color='primary'>
                        Trainee
                      </ToggleButton>
                      <ToggleButton value='Júnior' color='primary'>
                        Júnior
                      </ToggleButton>
                      <ToggleButton value='Pleno' color='primary'>
                        Pleno
                      </ToggleButton>
                      <ToggleButton value='Sênior' color='primary'>
                        Sênior
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>

              {/* SALARIO */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      E o salário disponível?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <RangeSlider
                      step={500}
                      min={0}
                      max={20000}
                      valueLabelDisplay='money'
                      defaultValue={this.state.salario}
                      onChangeCommitted={(event, value) => {
                        this.setState({ salario: value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* DISPONIVEIS */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>
                      Há quantas vagas para esta posição?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      onKeyPress={this.handleKeyPress}
                      type='number'
                      id='component-outlined'
                      placeholder={
                        this.state.disponiveis
                          ? toString(this.state.disponiveis)
                          : 'Quantidade de vagas'
                      }
                      fullWidth
                      defaultValue={this.state.disponiveis}
                      onChange={(event) => {
                        this.setState({ disponiveis: event.target.value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <FormNav
              Previus={'/3'}
              Next={'/5'}
              AdapterLink={this.AdapterLink}
              NextStep={this.NextStep}
              PreviusStep={this.PreviusStep}
            />
          </Box>
        );
        break;
      case 5:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  Para fechar, algo a mais que seu time precise saber?
                </Typography>
              </Grid>

              {/* NOTAS */}
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h3'>Conta mais!</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OutlinedInput
                      id='component-outlined'
                      placeholder='Me conta mais alguma coisa ;)'
                      fullWidth
                      defaultValue={this.state.notas}
                      onChange={(event) => {
                        this.setState({ notas: event.target.value });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <FormNav
              Previus={'/4'}
              Next={'/persona-pdf'}
              AdapterLink={this.AdapterLink}
              NextStep={this.NextStep}
              PreviusStep={this.PreviusStep}
            />
          </Box>
        );
        break;
      default:
        return (
          <Box>
            <Grid container spacing={6}>
              {/* TITULO */}
              <Grid item xs={12}>
                <Typography variant='h2'>
                  VISH! Algo de errado aconteceu!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
        break;
    }
  }
}

export default FormPagination;
