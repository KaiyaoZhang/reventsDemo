import React from 'react';
import { Form, Segment, Button, Modal } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../app/form/TextInput';

const RegisterForm = () => {
  return (
    <Modal trigger={
            <Button
                basic
                inverted
                content='Sign Up'
                style={{marginLeft: '10px'}}
            />}
            size='mini'
    >
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </Modal>
  );
};

export default reduxForm({form:'registerForm'})(RegisterForm);