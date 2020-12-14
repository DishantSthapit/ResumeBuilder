import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Container from '../shared/Container/Container';
import StepBar from '../shared/StepBar/StepBar';
import Footer from '../shared/Footer/Footer';
import './ChooseTemplatePage.scss';
import 'rsuite/dist/styles/rsuite-default.css';

const ChooseTemplatePage = () => {
  return (
    <>
      <StyleRoot>
        <Container>
          <StepBar />
        </Container>
        <Footer />
      </StyleRoot>
    </>
  );
}

export default ChooseTemplatePage;
