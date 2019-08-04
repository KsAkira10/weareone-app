import React from 'react';

export interface IRadioHeadState {
  name?: string;
  alt?: string;
};

export interface IRadioHeadProps extends IRadioHeadState { }

const RadioHead: React.FC<IRadioHeadState> = ({ name, alt }) => {
  const getLogo = (name?: string): string => {
    if (name) {
      return require(`../../assets/images/logos/${name}.png`);
    }
    return '';
  };
  
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