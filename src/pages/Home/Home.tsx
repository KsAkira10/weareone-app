import React, { Component } from 'react';
import RadioHead, { IRadioHeadProps } from '../../components/radio/head.component';
import RadioButtons, { IRadioButtonsProps, IRadioButtonsState } from '../../components/radio/buttons.component';

interface IHomeState {
  radioHead?: IRadioHeadProps;
  radioButtons: IRadioButtonsProps;
}

interface IHomeProps { }

export default class Home extends Component<IHomeProps, IHomeState> {
  state: IHomeState = {
    radioButtons: {
      items: [
        {
          name: 'TechnoBase.FM',
          value: 'technobase',
        },
        {
          name: 'HardBase.FM',
          value: 'hardbase',
        },
        {
          name: 'TranceBase.FM',
          value: 'trancebase',
        },
        {
          name: 'CoreTime.FM',
          value: 'coretime',
        },
        {
          name: 'TeaTime.FM',
          value: 'teatime',
        },
        {
          name: 'ClubTime.FM',
          value: 'clubtime',
        },
        {
          name: 'HouseTime.FM',
          value: 'housetime',
        },
      ]
    }
  };

  constructor(props: IHomeProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: IRadioButtonsState) {
    this.setState({
      radioHead: {
        name: e.value,
        alt: e.name,
      },
    });
  }

  render() {
    return (
      <>
        <header className="container">
          <RadioHead {...this.state.radioHead} />
        </header>
        <main className="container">
          <section>
            <RadioButtons onChange={this.handleChange} items={this.state.radioButtons.items} />
          </section>
          <section>
            player
          </section>
        </main>
        <footer className="container"></footer>
      </>
    );
  }
}