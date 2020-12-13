import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Container from '../shared/Container/Container';
import Footer from '../shared/Footer/Footer';
import IntroWrapper from './IntroWrapper/IntroWrapper';
import './LandingPage.scss';
import FacilityWrapper from './FacilityWrapper/FacilityWrapper';

const styles = {
  fadeIn: {
    animation: 'l 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
}

const LandingPage = () => {
  return (
    <>
      <StyleRoot>
        <div className="headerWrapper">
          <h1 style={styles.fadeIn}>Resume Builder</h1>
        </div>
        <Container>
          <IntroWrapper />
        </Container>
        <FacilityWrapper/>
        <Footer />
      </StyleRoot>
    </>

  );
}

export default LandingPage;
