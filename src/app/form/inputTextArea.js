import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const inputTextArea = ({input, width, type, placeholder, rows, meta: { touched, error }}) => {
    return (
        <Form.Field error={touched && !!error}>
            <textarea {...input} placeholder={placeholder} rows={rows} type={type}/>
            {touched && error && <Label basic color={'red'}></Label>}
        </Form.Field>
    )
}

export default inputTextArea;
