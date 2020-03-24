import React, { Component } from 'react';
import Attendees from './EventListAttendee';
import { Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions';
import { NavLink, Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    }
}

class EventListItem extends Component {
   
    handleDelete = (eventId) => {
        this.props.deleteEvent(eventId);
    }

    render() {
        const { title, hostPhotoURL, hostedBy, date, city, attendees, description, id } = this.props.event;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                    <Icon name="clock" /> {date} |
                    <Icon name="marker" /> {city}
                    </span>
                </Segment>
                {/* <Segment secondary>
                    <List horizontal>
                        {attendees.map(person => (
                            <Attendees key={person.id} src={person.photoURL}/>
                        ))}
                    </List>
                </Segment> */}
                <Segment clearing>
                    <Item.Group>
                        <Item>
                            <Item.Description>{description}</Item.Description>
                        </Item>
                        <Item>
                            <Button 
                                as={Link}
                                to= {`/events/${id}`} 
                                color="teal" 
                                floated="right" 
                                content="View" 
                            />
                            <Button 
                                as="a" 
                                color="red" 
                                floated="right" 
                                content="Delete" 
                                onClick={() => {this.handleDelete(this.props.event.id)}}
                            />
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment.Group>
        )
    }
}

export default connect(null, mapDispatchToProps)(EventListItem);
