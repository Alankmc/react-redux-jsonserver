import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../actions/test-action';

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.testAction();
  }

  render() {
    const { testSuccess } = this.props;
    if (testSuccess) {
      return <p>Action success!</p>
    } else {
      return <p>Action not loaded.</p>
    }
  }
}

const mapDispathToProps = dispath => ({
  actions: bindActionCreators({ testAction }, dispath),
});

const mapStateToProps = state => ({
  testSuccess: state.init.testSuccess,
});

export default connect(mapStateToProps, mapDispathToProps)(App);
