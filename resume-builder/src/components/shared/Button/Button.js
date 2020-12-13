import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="Button">
        {props.title}
    </button>
  ); 
}

export default Button;
