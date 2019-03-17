import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from './actions/userAction';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);

  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header> */}
        <input onChange={this.onUpdateUser} />
        {this.props.user}
        <div>
        {this.props.userPlusProp}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.aRandomProp}`
});

const mapActionsToProps = {
  onUpdateUser: updateUser 
};

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch);
  
// };

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {}
// }

export default connect(mapStateToProps, mapActionsToProps)(App);
