import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

import onboardingPasso1 from '../../images/onboardingPasso1.png';
import onboardingPasso2 from '../../images/onboardingPasso2.png';
import onboardingPasso3 from '../../images/onboardingPasso3.png';

import ModalTemplate from './ModalTemplate';

import './index.css';

class SimpleModal extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ step: 1 });
  };

  handleCloseWhitScroll = () => {
    this.setState({ open: false }, () =>
      this.setState({ step: 1 }, () => {
        const elmnt = document.getElementById('form-content');

        elmnt.scrollIntoView({
          behavior: 'smooth'
        });
      })
    );
  };

  nextStep = () => {
    this.setState({ step: ++this.state.step });
  };

  previusStep = () => {
    this.setState({ step: --this.state.step });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <Box component='span'>
            <Button size='large' color='secondary' onClick={this.handleOpen}>
              Saber mais
            </Button>
            <ModalTemplate
              NextStep={this.nextStep}
              PreviusStep={this.handleClose}
              ModalTitle='O que é?'
              ModalDesctiption='Uma persona é um modelo ficcional para definir a 
pessoa ideal para a vaga.'
              ModalImage={onboardingPasso1}
              HandleClose={this.handleClose}
              Open={this.state.open}
            />
          </Box>
        );
        break;
      case 2:
        return (
          <Box component='span'>
            <Button size='large' color='secondary' onClick={this.handleOpen}>
              Saber mais
            </Button>
            <ModalTemplate
              NextStep={this.nextStep}
              PreviusStep={this.previusStep}
              ModalTitle='Como funciona?'
              ModalDesctiption='Nosso gerador de personas te fará algumas perguntas sobre personalidade, habilidas específicas e características gerais da pessoa que você busca. Ao final, você terá um documento pdf super claro e organizado para compartilhar com todo o seu time.'
              ModalImage={onboardingPasso2}
              HandleClose={this.handleClose}
              Open={this.state.open}
            />
          </Box>
        );
        break;
      case 3:
        return (
          <Box component='span'>
            <Button size='large' color='secondary' onClick={this.handleOpen}>
              Saber mais
            </Button>
            <ModalTemplate
              NextStep={this.handleCloseWhitScroll}
              PreviusStep={this.previusStep}
              ModalTitle='Pra que serve?'
              ModalDesctiption='Com o nosso criador de personas, você consegue rapidamente criar uma documento para o time todo, com traços de personalidade, habilidades específicas e características demográficas para buscar nos candidatos que aplicam pra vaga.'
              ModalImage={onboardingPasso3}
              HandleClose={this.handleClose}
              Open={this.state.open}
            />
          </Box>
        );
        break;
    }
  }
}

export default SimpleModal;
