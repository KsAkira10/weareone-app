import React from 'react';
import './radio-head.component.scss';
export interface IRadioHead {
  src: string;
  alt: string;
};

const getLogo = (name: string): string => {
  return require(`../../assets/images/logos/${name}.png`);
};

const RadioHead: React.FC<IRadioHead> = ({ src, alt }) => {
  return (
    <section className="radio-head">
      <img className="img-fluid mx-auto" src={src} alt={alt} />
    </section>
  );
};

RadioHead.defaultProps = {
  src: getLogo('technobase'),
  alt: 'TechnoBase.FM'
};

export default RadioHead;