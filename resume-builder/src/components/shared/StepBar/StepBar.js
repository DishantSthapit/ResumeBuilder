import React from 'react';
import { Steps } from 'rsuite';
import { useDispatch } from 'react-redux'
import { STEPBAR } from '../../../constants';
import './StepBar.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StepBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const activeStep = useSelector(state => state.stepreducer.step);
  console.log(activeStep);

  const handleStepClick = (step) => () => {
      dispatch({type: "SETSTEP", payload:step.id})
      history.push(step.route)
  }

  return (
    <Steps current={activeStep}>
      {
        STEPBAR && STEPBAR.map(step => (
          <Steps.Item key={step.id} onClick={handleStepClick(step)} title={step.label} />
        ))
      }
    </Steps>
  );
}

export default StepBar;
