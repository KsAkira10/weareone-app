import React, { ReactNode } from 'react';
import './launcher.component.scss';

export default class Launcher extends React.Component {
  constructor(props: object) {
    super(props);
  }

  render(): ReactNode {
    return (<p>Launcher component</p>);
  }
};