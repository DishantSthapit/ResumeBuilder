import React from 'react';
import { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import { TEMPLATES } from '../../constants';
import StepBar from '../shared/StepBar/StepBar';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import Footer from '../shared/Footer/Footer';
import './ChooseTemplatePage.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import AccordionComp from '../shared/Accordion/Accordion';

const ChooseTemplatePage = () => {
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch({type: 'SETSTEP', payload: 1})
  },[])

  return (
    <>
      <StyleRoot>
      <HeaderBar title="Explore Templates"/>
        <Container>
          <StepBar />
          <AccordionComp templates={TEMPLATES} />
          <Footer />
        </Container>
      </StyleRoot>
    </>
  );
}

export default ChooseTemplatePage;
