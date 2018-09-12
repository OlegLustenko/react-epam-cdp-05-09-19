import React, {Component} from 'react';

class AutoFocusComponent extends Component {
  render() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        autoFocus: true,
      });
    });
  }
}

export default AutoFocusComponent;