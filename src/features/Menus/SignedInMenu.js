import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import {logoutUser} from '../auth/authActions';

const mapStateToProps = state => {
  return {
    userName : state.authReducer.user.displayName,
    userImg : state.authReducer.user.photoURL
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut : () => dispatch(logoutUser())
  }
}

class SignedInMenu extends Component {
  
  state = {
    showPic: false,
    userImg: '',
    userName: ''
  }

  
  handleLogOut = () => {
    this.props.logOut();
    this.props.history.push('/');
  }  

  componentDidMount(){
    if(this.props.userImg !== null){
      this.setState({
        showPic: true,
        userImg: this.props.userImg
      })
    }
  }
  
  componentWillReceiveProps(nextProps){
      if(nextProps.userImg !== this.props.userImg){
        this.setState({
          showPic: true,
          userImg: nextProps.userImg
        })
      }
  }
  
  render() {
      return (
        <Menu.Item position="right">
          {this.state.showPic == false ? 
            <Image avatar spaced="right" src='/img/user.png' /> 
            : <Image avatar spaced="right" src={this.state.userImg} /> }
          <Dropdown pointing="top left" text={this.props.userName}>
            <Dropdown.Menu>
              <Dropdown.Item text="My Profile" icon="user" as={NavLink} to='/settings'/>
              <Dropdown.Item text="Sign Out" icon="power" onClick={this.handleLogOut}/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignedInMenu));
