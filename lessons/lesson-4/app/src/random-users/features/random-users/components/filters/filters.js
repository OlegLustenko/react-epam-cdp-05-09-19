import React, {Component} from 'react';
import {connect} from 'react-redux';

import {showActive, clearFilter} from './actions/filter-by-name-anna';

export class FiltersComponent extends Component {
  render() {
    return (
      <div>
        <label>
          show active:
          <input type="checkbox" onClick={this.props.showActive}/>
        </label>
      </div>
    );
  }
}

export const Filters = connect(null, {
  showActive,
})(FiltersComponent);
