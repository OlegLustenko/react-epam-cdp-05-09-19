import React, {Component} from 'react';

import {GridBody} from './grid-body';
import {generate} from './generate-people';


const styles = {width: 1550, height: 566};
const styles2 = {top: 38, bottom: 24, left: 0, right: 0, height: 504};
export class InfinityTableApp extends React.Component {
  static defaultProps = {
    records: generate(10),
    height: 568,
    width: 1550,
  };

  scrollable = React.createRef();

  constructor(props) {
    super(props);
    this.state = this.constructor.getDefaultState(this.props);
  }

  static getDefaultState(props) {
    const recordHeight = 25;
    let recordsPerBody = Math.floor((props.height - 50) / recordHeight);

    return {
      recordHeight,
      recordsPerBody: recordsPerBody,
      visibleStart: 0,
      visibleEnd: recordsPerBody,
      displayStart: 0,
      displayEnd: recordsPerBody * 2,
    };
  }

  scrollState(scrollTop) {
    const {recordsPerBody, recordHeight} = this.state;
    const {records} = this.props;

    const visibleStart = Math.floor(scrollTop / recordHeight);
    const visibleEnd = Math.min(
      visibleStart + recordsPerBody,
      records.length - 1,
    );

    const displayStart = Math.max(
      0,
      Math.floor(scrollTop / recordHeight) - recordsPerBody * 1.5,
    );
    const displayEnd = Math.min(
      displayStart + 2.5 * recordsPerBody,
      records.length - 1,
    );

    this.setState({
      visibleStart: visibleStart,
      visibleEnd: visibleEnd,
      displayStart: displayStart,
      displayEnd: displayEnd,
      scroll: scrollTop,
    });
  }

  onScroll = (event) => {
    if (this.running) return;
    this.running = true;
    this.scrollState(this.scrollable.current.scrollTop);
    this.running = false;
  };

  render() {
    const {width, height, records} = this.props;

    return (
      <div>
        <div
          id="grid"
          style={{width: width, height: height}}
          name="grid"
          className="w2ui-reset w2ui-grid">
          <div style={styles}>
            <div
              id="gridgridbody"
              className="w2ui-grid-body"
              style={styles2}>
              <div
                id="gridgridrecords"
                className="w2ui-grid-records"
                style={{
                  top: 26,
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  overflowAnchor: 'none',
                }}
                ref={this.scrollable}
                onScroll={this.onScroll}>
                <GridBody
                  records={records}
                  total={records.length}
                  visibleStart={this.state.visibleStart}
                  visibleEnd={this.state.visibleEnd}
                  displayStart={this.state.displayStart}
                  displayEnd={this.state.displayEnd}
                  recordHeight={this.state.recordHeight}
                />
              </div>
              {this.renderHeader()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div id="gridgridcolumns" className="w2ui-grid-columns">
        <table>
          <tbody>
          <tr>
            <td className="w2ui-head" style={{width: 50}}>
              <div
                className="w2ui-resizer"
                name="0"
                style={{height: 25, marginLeft: 46}}
              />
              <div>ID</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>First Name</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="2"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Last Name</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="3"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>First Name</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email 2</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email 3</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email 4</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email</div>
            </td>
            <td className="w2ui-head" style={{width: 150}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email</div>
            </td>
            <td className="w2ui-head" style={{width: 100}}>
              <div
                className="w2ui-resizer"
                name="1"
                style={{height: 25, marginLeft: 146}}
              />
              <div>Email</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
