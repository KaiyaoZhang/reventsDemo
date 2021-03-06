import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu, Segment, Container } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

class Navbar extends Component {
    state={
        activeItem: '',
        auth: 'false'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleSignedIn = () => {
        this.setState({auth: 'true'})
    }
    handleSignedOut = () => {
        this.setState({auth: 'false'}, () => this.props.history.push('/'));
    }
   
    render() {
        const { activeItem } = this.state;
        return (
            <Segment inverted color={"blue"}>
                <Container>
                    <Menu inverted secondary>
                        <Menu.Item 
                            name='Meetup'
                            active={activeItem === 'Meetup'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            exact
                            to='/'
                        >
                            <img src='img/logo.png' alt='logo'/>
                            Meetup
                        </Menu.Item>
                        <Menu.Item
                            name='events'
                            active={activeItem === 'events'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            exact
                            to='/events'
                        />
                        {this.props.isAuthenticated && 
                        <Menu.Item
                            name='Dash Board'
                            active={activeItem === 'Dash Board'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/dashboard'
                        />}

                        {this.props.isAuthenticated === true ? <SignedInMenu signOut={this.handleSignedOut}/>: <SignedOutMenu signIn={this.handleSignedIn}/>}
                    </Menu>
                </Container>
            </Segment>
        )
    }
}

export default connect(mapStateToProps, null)(withRouter(Navbar));