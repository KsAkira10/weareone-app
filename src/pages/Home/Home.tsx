import React, { Component } from 'react';
import RadioHead, { IRadioHeadProps } from '../../components/radio/head.component';
import RadioButtons, { IRadioButtonsProps, IRadioButtonsState } from '../../components/radio/buttons.component';
import RadioPlayer, { IRadioPlayerProps } from '../../components/radio/player.component';

import Config from './../../config/config.json';

interface IHomeState {
  radioHead: IRadioHeadProps;
  radioButtons: IRadioButtonsProps;
  audioSelected: IRadioPlayerProps;
}

interface IHomeProps { }

export default class Home extends Component<IHomeProps, IHomeState> {
  streams = (JSON.parse(JSON.stringify(Config))).streams;
  stream = this.streams[0];
  state: IHomeState = {
    radioHead: {
      name: this.stream.name,
      alt: this.stream.label,
    },
    radioButtons: {
      items: [...this.streams],
    },
    audioSelected: {
      source: {
        high: this.stream.high,
        low: this.stream.low,
      }
    },
  };

  constructor(props: IHomeProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: IRadioButtonsState) {
    this.streams.forEach((stream: { name: string, low: string, high: string }) => {
      if(stream.name === e.name) {
        this.setState({
          radioHead: {
            name: e.name,
            alt: e.label,
          },
          audioSelected: {
            source: {
              high: stream.high,
              low: stream.low,
            }
          },
        });
      }
    });    
  }

  render() {
    return (
      <>
        <header className="container">
          <RadioHead {...this.state.radioHead} />
        </header>
        <main className="container">
          <article>
            <RadioButtons onChange={this.handleChange} items={this.state.radioButtons.items} />
            <RadioPlayer source={this.state.audioSelected.source} />
          </article>
        </main>
        <footer className="container"></footer>
      </>
    );
  }
}