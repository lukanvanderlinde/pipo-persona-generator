import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

// CSS
import './css/reset.css';
import './css/Config.css';
import './css/Typography.css';
import './css/App.css';

// Assets
import logo from './assets/logo.svg';
import mocinha from './assets/images/mocinha@2x.png';

// Custom Components
// import Content from './components/Content';
import Button from './components/Button';

// * TODOs *
// TODO: Implementar o webhook que envia os dados para o backend via zapier
// TODO: Button states - hover selected ...
// TODO: Testar a responsividade com landscape and portrait ao inves de tamanho de tela

export default class App extends Component {
  constructor() {
    super();

    this.formState = 0;
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/persona-pdf' component={PersonaPDF} />
      </BrowserRouter>
    );
  }
}

const FormPagination = ({ match }) => {
  let nextState = 0;
  let thisState = 0;
  let previusState = 0;

  if (match.params.formState) {
    thisState = parseInt(match.params.formState);
    previusState = thisState - 1;
    nextState = thisState + 1;
  }

  return (
    <div>
      <Link to={`/f/${thisState}`}>
        <Button btnStyle='link-secondary' btnText={`previus ${previusState}`} />
        <Button
          btnStyle='btn-rounded btn-primary'
          btnText={`next ${nextState}`}
        />
      </Link>
    </div>
  );
};

const HomePage = ({ match }) => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <div className='wrapper-overflow'>
          <div className='container'>
            <section className='columns'>
              <div className='col-2'>
                <header className='header'>
                  <h1>Bem vindo ao gerador de personas</h1>
                  <p>
                    Crie a Persona Ideal para vaga que você precisa preencher e
                    compartilhe esse perfil com todo o seu time!
                  </p>
                  <div>
                    <div>
                      <Button
                        btnText='vamos lá'
                        btnStyle='btn-rounded btn-primary'
                      />
                    </div>
                    <div>
                      <Button btnText='saiba mais' btnStyle='link-secondary' />
                    </div>
                  </div>
                </header>
              </div>
              <div className='col-1'>
                <img src={mocinha} alt=' ' />
              </div>
              <div className='col-2'>
                <Route path='' component={FormPagination} />
                <section className='container-form'>
                  <Route path='/f/:formState' component={FormPagination} />
                </section>
              </div>
            </section>
          </div>
        </div>
      </BrowserRouter>

      <footer>
        <a href='https://www.pipo.ai/'>
          <img
            src={logo}
            alt='Acessar o site da pipo'
            href='https://pipo.ai'
            target='_blank'
          />
        </a>
      </footer>
    </div>
  );
};

const PersonaPDF = ({ match }) => {
  return <h1>PDF IS HERE!</h1>;
};
