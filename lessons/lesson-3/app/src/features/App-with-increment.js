import {incrementCounter} from '../actions';
import connect from 'react-redux/es/connect/connect';
import {AppComponent} from '../App';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
