import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewUser} from './authActions';
import { Form, Segment, Button, Modal, Divider } from 'semantic-ui-react';
import SocialLogin from './SocialLogin/SocialLogin';

const mapDispachToProps = dispatch => {
  return {
    createUser : (email, password, username) => dispatch(createNewUser(email, password, username))
  }
}

class RegisterForm extends Component {

  state={
    username: '',
    email: '',
    password: '',
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleOnChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  onSubmit = () => {
    this.props.createUser(this.state.email, this.state.password, this.state.username)
    this.closeModal();
  }

  render() {
    return (
      <Modal trigger={
              <Button
                  basic
                  inverted
                  content='Sign Up'
                  style={{marginLeft: '10px'}}
                  onClick={this.handleOpen}
              />}
              open={this.state.modalOpen}
              onClose={this.closeModal}
              size='mini'
      >
        <Form size="large">
          <Segment>
            <Form.Field>
              <input 
                name='username'
                placeholder='UserName'
                onChange={this.handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='email'
                placeholder='Email'
                onChange={this.handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleOnChange}
              />
            </Form.Field>
            <Button fluid size="large" color="teal" onClick={this.onSubmit}>
              Register
            </Button>
            <Divider horizontal>
              or
            </Divider>
            <SocialLogin/>
          </Segment>
        </Form>
      </Modal>
    );
  }
}

export default connect(null, mapDispachToProps)(RegisterForm);