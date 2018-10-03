import React from 'react';

export class GridBody extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      shouldUpdate: true,
      total: 0,
      displayStart: 0,
      displayEnd: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    // let shouldUpdate =
    //   !(
    //     nextProps.visibleStart >= this.state.displayStart &&
    //     nextProps.visibleEnd <= this.state.displayEnd
    //   ) || nextProps.total !== this.state.total;
    //
    // if (shouldUpdate) {
    //   this.setState({
    //     shouldUpdate: shouldUpdate,
    //     total: nextProps.total,
    //     displayStart: nextProps.displayStart,
    //     displayEnd: nextProps.displayEnd
    //   });
    // } else {
    //   this.setState({
    //     shouldUpdate: false
    //   });
    // }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.shouldUpdate;
  // }

  render() {
    const {
      visibleStart,
      visibleEnd,
      recordHeight,
      records: recordsProps,
    } = this.props;

    let rows = [];
    rows[0] = (
      <tr
        id="gridgridrectop"
        key={0}
        style={{height: visibleStart * recordHeight}}>
        <td colSpan="200"/>
      </tr>
    );

    console.log({visibleStart});
    console.log({visibleEnd});
    for (let i = visibleStart, _i = 1; i < visibleEnd; ++i, _i++) {
      console.log('_i:', _i);
      console.log('i:', i);
      let record = recordsProps[i];
      let records = Object.keys(record);
      const incrementedI = i + 1;
      rows[incrementedI] = (
        <tr
          className={i % 2 === 0 ? 'w2ui-even' : 'w2ui-odd'}
          key={i}
          style={{height: recordHeight}}>
          <td className="w2ui-grid-data">
            <div title={incrementedI}>{incrementedI}</div>
          </td>
          {records.map((x, i) => {
            return (
              <td className="w2ui-grid-data" key={i}>
                <div title={record[x]}>{record[x]}</div>
              </td>
            );
          })}

          <td className="w2ui-grid-data-last"/>
        </tr>
      );
    }
    rows.push(
      <tr
        id="gridgridrecbottom"
        key={rows.length}
        style={{
          height: (recordsProps.length - visibleEnd) * recordHeight,
        }}>
        <td colSpan="200"/>
      </tr>,
    );

    return (
      <table>
        <tbody>
        <tr>
          <th className="w2ui-grid-data" style={{height: 0, width: 50}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th className="w2ui-grid-data" style={{height: 0, width: 150}}/>
          <th
            className="w2ui-grid-data-last"
            style={{height: 0, width: 81}}
          />
        </tr>
        {rows}
        </tbody>
      </table>
    );
  }
}
