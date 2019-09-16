import React from 'react';

import { Box } from '@material-ui/core';

import './index.css';

import PipoHeader from '../../components/PipoHeader';
import PipoForm from '../../components/PipoForm';
import PipoFooter from '../../components/PipoFooter';

import mocinha from '../../assets/images/mocinha@3x.png';

const HomePage = ({ match }) => {
  const formsPage = match.params.formState;
  return (
    <Box className='wrapper'>
      <Box className='wrapper-overflow'>
        <Box className='container'>
          <Box className='columns'>
            {/* HOMEPAGE */}
            <Box className='col-2' id='header-content'>
              <PipoHeader />
            </Box>
            <Box className='col-1'>
              <img className='mocinha' src={mocinha} alt=' ' />
            </Box>
            {/* FORM */}
            <Box className='col-2' id='form-content'>
              <PipoForm formsPage={formsPage} />
            </Box>
          </Box>
        </Box>
      </Box>
      <PipoFooter />
    </Box>
  );
};

export default HomePage;
