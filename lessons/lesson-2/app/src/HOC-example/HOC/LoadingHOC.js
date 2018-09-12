import React from 'react';

export const LoadingHOC = (WrappedComponent) => {
  return class LoadingHOCComponent extends React.Component {
    s
    render() {
      if (!this.props.contacts.length) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...this.props}/>;
    }
  };
};
