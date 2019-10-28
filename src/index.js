import * as serviceWorker from './services/serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import theme from './theme';

import PersonaPDF from './routes/PersonaPDF';
import HomePage from './routes/HomePage';
import { ThemeProvider } from '@material-ui/styles';

// * TODOs *
// https://mailboxlayer.com/documentation
// TODO: Definir o theme - color de acordo com o branding.
// TODO: Definir a description para ter um SEO melhor.
// TODO: Adicionar um favicon.
// TODO: Manipular o manifesto.

const LandingPage = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/persona-pdf' component={PersonaPDF} />
        <Route exact={true} path='/:formState' component={HomePage} />
        <Redirect to='/0' />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your landing page to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
