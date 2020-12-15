import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import Footer from '../shared/Footer/Footer';
import StepBar from '../shared/StepBar/StepBar';
import IntroWrapper from './IntroWrapper/IntroWrapper';
import AccordionComp from '../shared/Accordion/Accordion';
import './LandingPage.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import FacilityWrapper from './FacilityWrapper/FacilityWrapper';

const styles = {
  fadeIn: {
    animation: 'l 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
}

const LandingPage = () => {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch({type: 'SETSTEP', payload: 0})
  },[])

  return (
    <>

      <StyleRoot>
        {/* <div className="headerWrapper">
          <h1 style={styles.fadeIn}>Resume Builder</h1>
        </div> */}
        <Container>
          <StepBar />
          <IntroWrapper />
        </Container>
        {/* <FacilityWrapper />
        <AccordionComp />
        <Footer /> */}
      </StyleRoot>
    </>

  );
}

export default LandingPage;
