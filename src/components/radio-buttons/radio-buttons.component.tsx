import React from 'react';
import './radio-buttons.component.scss';

export interface IRadioButtons {
  handleClick: any;
}

const getRadioButtons = () => {
  return document.querySelectorAll('.radio-button');
};

const RadioButtonActive = (element: Element) => {
  getRadioButtons().forEach((button) => {
    if (button.classList.contains('radio-button--active')) {
      button.classList.remove('radio-button--active');
    }
  });

  if (element.classList.contains('radio-button--active')) {
    element.classList.remove('radio-button--active');
  } else {
    element.classList.add('radio-button--active');
  }
};

const RadioButtons: React.FC<IRadioButtons> = ({ handleClick }) => (
  <div className="radio-buttons">
    <button type="button" className="radio-button radio-button--technobase" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--hardbase" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--trancebase" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--coretime" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--teatime" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--clubtime" onClick={handleClick}></button>
    <button type="button" className="radio-button radio-button--housetime  radio-button--active" onClick={handleClick}></button>
  </div>
);

RadioButtons.defaultProps = {
  handleClick: (e: React.MouseEvent) => {
    e.preventDefault();
    RadioButtonActive(e.currentTarget);
  }
};

export default RadioButtons;