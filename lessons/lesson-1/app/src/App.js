import React from 'react';

export function Avatar(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Hello framework with name {props.framework}! </h1>
    </React.Fragment>
  );
}

Avatar.defaultProps = {
  framework: 'React',
};

const frameworks = ['React', 'Vue', 'Angular'];

export class Header extends React.Component {

  static defaultProps = {
    helloEpam: 'qwerty',
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: 'qwerty',
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  renderFrameworks() {
    return frameworks.map((frameworkName, index) => {
      return (
        <Avatar key={index}>
          {frameworkName}
          <Avatar/>
        </Avatar>
      );

    });
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter = () => {
    this.state.counter = this.state.counter - 10;
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const blockStyle = {
      color: 'blue',
    };
    return (
      <main>
        {this.props.helloEpam}
        <a href='#' style={blockStyle}>Navigate to</a>
        <Avatar framework/>
        <ul>
          {this.state.name}
          <button onClick={this.incrementCounter}>INCREMENT</button>
          {this.state.counter}
          <button onClick={this.decrementCounter}>DECREMENT</button>
        </ul>

      </main>
    );
  }
}



