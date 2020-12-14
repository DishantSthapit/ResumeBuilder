import './IntroWrapper.scss';
import Button from '../../shared/Button/Button';
import { useDispatch } from 'react-redux'
import resumeExample from '../../../assets/images/resumeexample.png';

const IntroWrapper = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch({ type: 'SETSTEP', payload: 0 })
    return dispatch({ type: 'ADDTEMPLATE', payload: 0 })
  }

  return (
    <div className="introWrapper">
      <div className="imageWrapper">
        <img className="resumeExample" src={resumeExample} />
        <img className="resumeExample1" src={resumeExample} />
      </div>
      <div className="textWrapper">
        <div className="welcomeText" >Lets begin the journey of creating beautiflu Resume on you fingertips and Effortlessly make a job-worthy resume that gets you hired faster</div>
        <Button onClick={() => dispatch({ type: 'SETSTEP', payload: 3 })} title="Get Started +" />
      </div>
    </div>
  );
}

export default IntroWrapper;
