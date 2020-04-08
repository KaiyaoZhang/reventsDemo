import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Form, Segment, Button, Modal, Divider } from 'semantic-ui-react';
import {loginUser, socialLogin} from './authActions';
import SocialLogin from './SocialLogin/SocialLogin';

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (email, password) => dispatch(loginUser(email, password)),
    socialLogin: (selectedProvder) => dispatch(socialLogin(selectedProvder))
  }
}


class LoginForm extends Component {
  state={
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

  onSubmit = () => {
    this.props.userLogin(this.state.email, this.state.password);
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <Fragment>
        <Modal 
            size='mini'
            trigger={<Button
                        basic
                        inverted
                        content='Login'
                        onClick={this.handleOpen}
                    />}
            open={this.state.modalOpen}
        >
        <Form error size="large">
        <Segment>
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
            <Button 
              fluid 
              size="large" 
              color="teal"
              onClick={this.onSubmit}  
            >
            Login
            </Button>
            <Divider horizontal>
              or
            </Divider>
            <SocialLogin socialLogin={this.props.socialLogin}/>
        </Segment>
        </Form>
      </Modal>
      </Fragment>
    )
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));