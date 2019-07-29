import React from 'react';
import './radio-buttons.component.scss';

export interface IRadioButtons {
  handleClick: any;
}

const RadioButtons: React.FC<IRadioButtons> = ({ handleClick }) => (
  <div className="radio-buttons">
    <button type="button" onClick={handleClick}></button>
  </div>
);

RadioButtons.defaultProps = {
  handleClick: (e: React.MouseEvent) => {
    console.log(e.clientX);
  }
};

export default RadioButtons;