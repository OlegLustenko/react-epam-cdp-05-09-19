import React from 'react';

import './with-loading-spinner.css';

export const withLoadingSpinner = (WrapperComponent) => {
  class LoadingHOC extends React.Component {
    render() {
      return this.props.contacts.length ? (
        <WrapperComponent {...this.props} />
      ) : (
        <div className="loader" />
      );
    }
  }

  return LoadingHOC;
};
