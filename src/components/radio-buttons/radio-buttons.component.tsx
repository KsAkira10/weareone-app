import React, { Component, ChangeEvent } from 'react';
import './radio-buttons.component.scss';

export interface IRadioButtons {
  name?: string;
  value?: string;
  onChange?: any;
}

export interface IRadioButtonsState {
  value: string;
  name: string;
}

export default class RadioButtons extends Component<IRadioButtons, IRadioButtonsState> {
  state: IRadioButtonsState;

  constructor(props: IRadioButtons) {
    super(props);

    this.state = {
      value: props.value || '',
      name: props.name || '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const state = { value: event.target.value, name: event.target.name };
    this.setState({ ...state });

    this.props.onChange({ ...state });
  }

  render() {
    return (
      <form className="radio-buttons" aria-label="We Are One">
        <label htmlFor="technobase" className={`radio-button radio-button--technobase ${this.state.value === 'technobase' ? 'radio-button--active' : ''}`}>
          <input
            id="technobase"
            name="TechnoBase.FM"
            type="radio"
            value="technobase"
            checked={this.state.value === 'technobase'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="hardbase" className={`radio-button radio-button--hardbase ${this.state.value === 'hardbase' ? 'radio-button--active' : ''}`}>
          <input
            id="hardbase"
            name="HardBase.FM"
            type="radio"
            value="hardbase"
            checked={this.state.value === 'hardbase'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="trancebase" className={`radio-button radio-button--trancebase ${this.state.value === 'trancebase' ? 'radio-button--active' : ''}`}>
          <input
            id="trancebase"
            name="TranceBase.FM"
            type="radio"
            value="trancebase"
            checked={this.state.value === 'trancebase'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="coretime" className={`radio-button radio-button--coretime ${this.state.value === 'coretime' ? 'radio-button--active' : ''}`}>
          <input
            id="coretime"
            name="CoreTime.FM"
            type="radio"
            value="coretime"
            checked={this.state.value === 'coretime'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="teatime" className={`radio-button radio-button--teatime ${this.state.value === 'teatime' ? 'radio-button--active' : ''}`}>
          <input
            id="teatime"
            name="TeaTime.FM"
            type="radio"
            value="teatime"
            checked={this.state.value === 'teatime'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="clubtime" className={`radio-button radio-button--clubtime ${this.state.value === 'clubtime' ? 'radio-button--active' : ''}`}>
          <input
            id="clubtime"
            name="ClubTime.FM"
            type="radio"
            value="clubtime"
            checked={this.state.value === 'clubtime'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="housetime" className={`radio-button radio-button--housetime ${this.state.value === 'housetime' ? 'radio-button--active' : ''}`}>
          <input
            id="housetime"
            name="HouseTime.FM"
            type="radio"
            value="housetime"
            checked={this.state.value === 'housetime'}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}