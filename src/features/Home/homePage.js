import React from 'react';
import {Segment, Container, Header, Image, Button, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image
                        size='massive'
                        src='/img/logo.png'
                        alt='logo'
                        style={{ marginBottom: 12 }}
                    />
                    Meetup
                </Header>
                <Header as='h2' inverted>
                    Let's make fun!
                </Header>
                <Link to='/events'>
                    <Button size='huge' inverted>
                        Get started
                        <Icon name='right arrow' inverted />
                    </Button>
                </Link>
            </Container>
        </Segment>
    )
}

export default HomePage;