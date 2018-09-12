import React, {Component} from 'react';

export class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    return nextProps.left !== this.props.left;
  }

  render() {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        {this.props.left}
        {this.props.right}
      </header>
    );
  }
}
