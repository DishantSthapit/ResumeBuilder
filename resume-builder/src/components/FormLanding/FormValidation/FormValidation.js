import React from 'react';
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

function FormVanilla({ initialValues, validate }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  // change event handler
  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;
    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;
    // save field values
    setValues({
      ...values,
      [name]: value,
    });
    // was the field modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;
    // check for a new error
    const error = validate[name](value);
    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  // form submit handler
  const handleSubmit = evt => {
    console.log(evt.nodeName)
    debugger;
    if (evt.key === 'Enter' || evt.keyCode === 13) {
      evt.preventDefault();
    }
    else {
      // validate the form
      const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: {
              ...acc.errors,
              ...(newError && { [key]: newError }),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        },
        {
          errors: { ...errors },
          touched: { ...touched },
        },
      );
      setErrors(formValidation.errors);
      setTouched(formValidation.touched);

      if (
        !Object.values(formValidation.errors).length && // errors object is empty
        Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
        Object.values(formValidation.touched).every(t => t === true) // every touched field is true
      ) {
        history.push('/pdf');
        dispatch({ type: 'SETSTEP', payload: 3 })
        dispatch({ type: 'SETUSER', payload: values })
      }
    }
  };

  return (
    <>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
    </>
  );
}

export default FormVanilla;