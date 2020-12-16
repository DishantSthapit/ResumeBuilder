import React from 'react';
import { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import Footer from '../shared/Footer/Footer';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import StepBar from '../shared/StepBar/StepBar';
import IntroWrapper from './IntroWrapper/IntroWrapper';
import AccordionComp from '../shared/Accordion/Accordion';
import './LandingPage.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import FacilityWrapper from './FacilityWrapper/FacilityWrapper';

const LandingPage = () => {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch({type: 'SETSTEP', payload: 0})
  },[])

  return (
    <>
      <StyleRoot>
        <HeaderBar title="Resume Builder"/>
        <Container>
          <StepBar />
          <IntroWrapper />
        </Container>
        <FacilityWrapper />
        <Footer />
      </StyleRoot>
    </>

  );
}

export default LandingPage;
