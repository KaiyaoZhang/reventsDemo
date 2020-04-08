import React from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';

const extra = (
    <a>
      <Icon name='edit' />
      Edit
    </a>
  )

const AboutPage = ({user}) => {
    let img = '';
    if(user.photoURL == null){
        img = '/img/user.png'
    }else {
        img = user.photoURL
    }
    return (
        <Card.Group>
            <Card
                image={img}
                header={user.displayName}
                description={user.email}
                extra={extra}
            />
        </Card.Group>
    )
}

export default AboutPage;