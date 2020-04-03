import React from 'react';
import { Form, Segment, Button, Modal } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/form/TextInput';

const LoginForm = () => {
  return (
    <Modal 
        size='mini'
        trigger={<Button
        basic
        inverted
        content='Login'
    /> }>
        <Form error size="large">
        <Segment>
            <Field
            name="email"
            component={TextInput}
            type="text"
            placeholder="Email Address"
            />
            <Field
            name="password"
            component={TextInput}
            type="password"
            placeholder="password"
            />
            <Button fluid size="large" color="teal">
            Login
            </Button>
        </Segment>
        </Form>
    </Modal>
  );
};

export default reduxForm({form: 'loginForm'})(LoginForm);