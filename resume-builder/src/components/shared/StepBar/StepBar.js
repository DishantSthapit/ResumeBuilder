import React from 'react';
import {Steps} from 'rsuite';
import './StepBar.scss';
import { useSelector } from 'react-redux';

const StepBar = () => {
    const activeStep = useSelector(state => state.stepreducer.step);
    return (
        <Steps current={activeStep}>
            <Steps.Item title="Get Started" />
            <Steps.Item title="Choose Template"/>
            <Steps.Item title="Add Details"/>
            <Steps.Item title="Done"/>
        </Steps>
    );
}

export default StepBar;
