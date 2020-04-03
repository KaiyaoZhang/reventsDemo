import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position='right'>
            {/* <Button
                basic
                inverted
                content='Login'
                onClick={signIn}
            /> */}
            <LoginModal/>
            {/* <Button
                basic
                inverted
                content='Sign Up'
                style={{marginLeft: '10px'}}
            /> */}
            <RegisterModal/>
        </Menu.Item>
    )
}

export default SignedOutMenu;