import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Feed, Grid } from 'semantic-ui-react';

const extra = (
    <a>
      <Icon name='edit' />
      Edit
    </a>
  )

const AboutPage = ({user, eventData}) => {
    //let events = [];
    let events = {};
    let img = '';
    if(user.photoURL == null){
        img = '/img/user.png'
    }else {
        img = user.photoURL
    }

    eventData.forEach(el => {
        if(el.email === user.email){
            //events.push(el.title)
            events[el.id] = el.title
        }
    })

    const eventsKey = Object.keys(events);
    
    return (
        <Grid>
            <Grid.Column width={7}>
                <Card
                    image={img}
                    header={user.displayName}
                    description={user.email}
                    extra={extra}
                />
            </Grid.Column>
            <Grid.Column width={2}>
                
            </Grid.Column>
            <Grid.Column width={7}>
                <Card>
                    <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>
                            {eventsKey.length > 0 ? eventsKey.map((el, index) => {
                                return (
                                    <Feed.Event key={index}>
                                        <Feed.Label image={img} />
                                        <Feed.Content>
                                            <Feed.Summary>
                                                You joined <Link to={`/events/${el}`}><a>{events[el]}</a></Link>, having fun!.
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                )
                            }): <Feed.Event>
                                    <Feed.Label image={img}/>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            You haven't joined any event.
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>}
                        </Feed>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
}

export default AboutPage;