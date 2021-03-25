import React from 'react';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import './HeaderBar.scss';

const styles = {
  fadeIn: {
    animation: 'l 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
}

const HeaderBar = (props) => {
  const {title} = props;
  return (
    <div className="headerWrapper">
      <h1 style={styles.fadeIn}>{title}</h1>
    </div>
  );
}

export default HeaderBar;
