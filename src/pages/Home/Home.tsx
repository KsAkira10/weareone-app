import React, { Component } from 'react';
import RadioHead, { IRadioHead } from '../../components/radio-head/radio-head.component';
import RadioButtons, { IRadioButtons } from '../../components/radio-buttons/radio-buttons.component';

export default class Home extends Component<IRadioHead> {

  state: IRadioHead;

  constructor(props: IRadioHead) {
    super(props);

    this.state = {
      name: 'technobase',
      alt: 'TechnoBase.FM',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: IRadioButtons) {
    this.setState({
      name: e.value,
      alt: e.name,
    });
  }

  render() {
    return (
      <>
        <header className="container">
          <RadioHead {...this.state} />
        </header>
        <main className="container">
          <RadioButtons onChange={this.handleChange} value="technobase" name="TechnoBase.FM" />
        </main>
        <footer className="container"></footer>
      </>
    );
  }
}