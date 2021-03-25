import React from 'react';
import { StyleRoot } from 'radium';
import { useDispatch } from 'react-redux'
import Container from '../shared/Container/Container';
import StepBar from '../shared/StepBar/StepBar';
import FormVanilla from './FormValidation/FormValidation';
import Footer from '../shared/Footer/Footer';
import HeaderBar from '../shared/HeaderBar/HeaderBar';
import './FormLanding.scss';
import { useSelector } from 'react-redux';
import { useSetLoader } from '../../hooks/useSetLoader';
import Loader from '../shared/Loader/Loader';


const FormLanding = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userReducer);
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
    if (fieldValue === '') {
      return `${fieldName} is required`;
    }
    return null;
  }

  const numberValidation = (fieldName, fieldValue) => {
    if (fieldValue < 0) {
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


  const validate = {
    firstName: name => nameValidation('First Name', name),
    lastName: name => nameValidation('Last Name', name),
    email: emailValidation,
    summary: name => requiredValidation('Summary', name),
    phoneNumber: number => numberValidation('Phone Number', number),
    address: address => requiredValidation('Address', address),
    title: title => requiredValidation('Title', title),
    skills: skills => requiredValidation('Skills', skills),
  };

  const initialValues = {
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    summary: userData.summary,
    phoneNumber: userData.phoneNumber,
    address: userData.address,
    title: userData.title,
    skills: userData.skills
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
