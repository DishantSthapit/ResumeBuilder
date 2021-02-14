import React from 'react';
import { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import StepBar from '../shared/StepBar/StepBar';
import FormVanilla from './FormValidation/FormValidation';
import Footer from '../shared/Footer/Footer';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import './FormLanding.scss';
import { useSetLoader } from '../../hooks/useSetLoader';
import Loader from '../shared/Loader/Loader';

const FormLanding = () => {
  const dispatch = useDispatch();
  const loader = useSetLoader(500);

  React.useEffect(() => {
    dispatch({ type: 'SETSTEP', payload: 2 })
  }, [])

  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };
  
  const requiredValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} is required`;
    }
    return null;
  }

  const emailValidation = email => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      )
    ) {
      return null;
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    return 'Please enter a valid email';
  };
  
  const ageValidation = age => {
    if (!age) {
      return 'Age is required';
    }
    if (age < 18) {
      return 'Age must be at least 18';
    }
    if (age > 99) {
      return 'Age must be under 99';
    }
    return null;
  };
  
  const validate = {
    firstName: name => nameValidation('First Name', name),
    lastName: name => nameValidation('Last Name', name),
    email: emailValidation,
    age: ageValidation,
    summary: name => requiredValidation('Summary', name),
  };
  
  const initialValues = {
    age: 10,
    email: 'no@email',
    firstName: 'Mary',
    lastName: 'Jane',
    summary: 'I am a developer',
  };
  
  return (
    <>
      {
        loader ? <Loader /> : (
          <StyleRoot>
            <HeaderBar title="Add Details" />
            <Container>
              <StepBar />
              <FormVanilla validate={validate} initialValues={initialValues} />
            </Container>
            <Footer />
          </StyleRoot>
        )
      }
    </>
  );
}

export default FormLanding;
