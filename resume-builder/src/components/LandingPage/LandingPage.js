import React from 'react';
import { StyleRoot } from 'radium';
import Container from '../shared/Container/Container';
import Footer from '../shared/Footer/Footer';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import StepBar from '../shared/StepBar/StepBar';
import IntroWrapper from './IntroWrapper/IntroWrapper';
import './LandingPage.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import FacilityWrapper from './FacilityWrapper/FacilityWrapper';
import { useSetLoader } from '../../hooks/useSetLoader';
import Loader from '../shared/Loader/Loader';

const LandingPage = () => {
  const loader = useSetLoader(0);
  return (
    <>
      {
        loader ? <Loader /> : (
          <StyleRoot>
            <HeaderBar title="Resume Builder" />
            <Container>
              <StepBar />
              <IntroWrapper />
            </Container>
            <FacilityWrapper />
            <Footer />
          </StyleRoot>
        )
      }
    </>
  );
}

export default LandingPage;
