import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

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
                        <Menu.Item
                            name='create events'
                            active={activeItem === 'create events'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/createEvent'
                        />
                        <Menu.Item
                            name='events gallery'
                            active={activeItem === 'events gallery'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/gallery'
                        />
                        {this.state.auth === 'true' ? <SignedInMenu signOut={this.handleSignedOut}/>: <SignedOutMenu signIn={this.handleSignedIn}/>}
                    </Menu>
                </Container>
            </Segment>
        )
    }
}

export default withRouter(Navbar);