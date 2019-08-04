import React from 'react';
import './radio-head.component.scss';

export interface IRadioHead {
  name: string;
  alt: string;
};

const getLogo = (name: string): string => {
  if (name) {
    return require(`../../assets/images/logos/${name}.png`);
  }
  return '';
};

const RadioHead: React.FC<IRadioHead> = ({ name, alt }) => {
  return (
    <section className="radio-head">
      <img className="img-fluid mx-auto" src={getLogo(name)} alt={alt} />
    </section>
  );
};

RadioHead.defaultProps = {
  name: 'technobase',
  alt: 'TechnoBase.FM'
};

export default RadioHead;