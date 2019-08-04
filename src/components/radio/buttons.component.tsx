import React, { Component, ChangeEvent } from 'react';

export interface IRadioButtonsState {
  name?: string;
  value?: string;
}

export interface IRadioButtonsProps extends IRadioButtonsState {
  items: IRadioButtonsState[];
  onChange?: any;
}

export default class RadioButtons extends Component<IRadioButtonsProps, IRadioButtonsState> {
  state: IRadioButtonsState;

  constructor(props: IRadioButtonsProps) {
    super(props);

    this.state = {
      value: props.value || 'technobase',
      name: props.name || 'TechnoBase.FM',
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
        {this.props.items.length > 0 && this.props.items.map((item: IRadioButtonsState, index: number) => (
          <label key={index} htmlFor={item.value} className={`radio-button radio-button--${item.value} ${this.state.value === item.value ? 'radio-button--active' : ''}`}>
            <input
              id={item.value}
              name={item.name}
              type="radio"
              value={item.value}
              checked={this.state.value === item.value}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </form>
    );
  }
}