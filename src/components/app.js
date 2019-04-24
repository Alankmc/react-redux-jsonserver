import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../actions/test-action';

class App extends React.PureComponent {
  handleSend() {
    const { actions } = this.props;
    const { thing1, thing2, objConst } = this;
    actions.testAction({thing1, thing2, objConst});
  }

  render() {
    const { thing1, thing2, objConst } = this.props;
    console.log(this.props);
    // UM...!! DOES THIS WORK??
    // WHY DONT WE DO THIS?? THIS FELLS BAD??
    return (
      <div>
        THING 1
        <input type="text" onChange={e => this.thing1 = e.target.value} />
        THING 2
        <input type="text" onChange={e => this.thing2 = e.target.value} />
        THING 3
        <input type="text" onChange={e => this.objConst = e.target.value} />
        <button type="button" onClick={this.handleSend.bind(this)}>Send!</button>
        <div>
          Got from backend:<br />
          <span>Thing1: {thing1}</span><br />
          <span>Thing2: {thing2}</span><br />
          <span>ObjConst: {objConst}</span><br />
        </div>
      </div>
    )
  }
}

const mapDispathToProps = dispath => ({
  actions: bindActionCreators({ testAction }, dispath),
});

const mapStateToProps = state => ({
  ...state.init,
});

export default connect(mapStateToProps, mapDispathToProps)(App);
