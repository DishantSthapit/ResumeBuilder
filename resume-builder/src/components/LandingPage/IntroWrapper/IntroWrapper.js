import './IntroWrapper.scss';
import Button from '../../shared/Button/Button';
import { useHistory } from "react-router-dom";
import resumeExample from '../../../assets/images/resumeexample.png';

const IntroWrapper = () => {
  const history = useHistory();

  return (
    <div className="introWrapper">
      <div className="imageWrapper">
        <img className="resumeExample" src={resumeExample} />
        <img className="resumeExample1" src={resumeExample} />
      </div>
      <div className="textWrapper">
        <div className="welcomeText" >Lets begin the journey of creating beautiful Resume on you fingertips and Effortlessly make a job-worthy resume that gets you hired faster</div>
        <Button onClick={() => history.push("/template")} title="Get Started +" />
      </div>
    </div>
  );
}

export default IntroWrapper;
