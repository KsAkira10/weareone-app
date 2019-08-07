import React, { Component, ChangeEvent } from 'react';

export interface IRadioButtonsState {
  label?: string;
  name?: string;
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
      name: props.name || 'technobase',
      label: props.label || 'TechnoBase.FM',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const state = { name: event.target.value, label: event.target.name };
    this.setState({ ...state });

    this.props.onChange({ ...state });
  }

  render() {
    return (
      <section className="container">
        <form className="radio-buttons" aria-label="We Are One">
          {this.props.items.length > 0 && this.props.items.map((item: IRadioButtonsState, index: number) => (
            <label key={index} htmlFor={item.name} className={`radio-button radio-button--${item.name} ${this.state.name === item.name ? 'radio-button--active' : ''}`}>
              <input
                id={item.name}
                name={item.label}
                type="radio"
                value={item.name}
                checked={this.state.name === item.name}
                onChange={this.handleChange}
              />
            </label>
          ))}
        </form>
      </section>
    );
  }
}