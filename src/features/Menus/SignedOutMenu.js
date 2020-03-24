import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position='right'>
            <Button
                basic
                inverted
                content='Login'
                onClick={signIn}
            />
            <Button
                basic
                inverted
                content='Sign Up'
                style={{marginLeft: '10px'}}
            />
        </Menu.Item>
    )
}

export default SignedOutMenu;