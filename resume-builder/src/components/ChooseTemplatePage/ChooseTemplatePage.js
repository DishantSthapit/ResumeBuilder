import React from 'react';
import { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import { useSetLoader } from '../../hooks/useSetLoader';
import { TEMPLATES } from '../../constants';
import StepBar from '../shared/StepBar/StepBar';
import Loader from '../shared/Loader/Loader';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import Footer from '../shared/Footer/Footer';
import './ChooseTemplatePage.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import AccordionComp from '../shared/Accordion/Accordion';

const ChooseTemplatePage = () => {
  const dispatch = useDispatch();
  const loading = useSetLoader(500);

  React.useEffect(() => {
    dispatch({ type: 'SETSTEP', payload: 1 })
  }, [])

  return (
    <>{
      loading ? <Loader /> : (
        <StyleRoot>
          <HeaderBar title="Explore Templates" />
          <Container>
            <StepBar />
            <AccordionComp templates={TEMPLATES} />
            <Footer />
          </Container>
        </StyleRoot>
      )
    }

    </>
  );
}

export default ChooseTemplatePage;
