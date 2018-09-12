import React, {Component} from 'react';

// Render props
export class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCounter,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return this.props.children({
      counter: this.state.counter,
      increment: this.increment,
      decrement: this.decrement,
    });
  }
}
