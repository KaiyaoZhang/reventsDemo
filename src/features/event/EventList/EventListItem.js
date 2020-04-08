import React, { Component } from 'react';
import Attendees from './EventListAttendee';
import { Segment, Item, Icon, Button, Modal, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteEvent } from '../eventActions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        isAuthenticated : state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    }
}

class EventListItem extends Component {
   
    state = {
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleDelete = (eventId) => {
        this.props.deleteEvent(eventId);
    }

    render() {
        const { title, hostPhotoURL, hostedBy, date, city, attendees, description, id } = this.props.event;
        const newDate = moment(date).format('MMMM Do YYYY, h:mm a');
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
                    <Icon name="clock" /> {newDate} |
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
                            <Item.Description style={{
                                overflow : 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                webkitLineClamp: '2',
                                webkitBoxOrient: 'vertical',
                                }}>
                                    {description}
                            </Item.Description>
                        </Item>
                        <Item>
                            {this.props.isAuthenticated ? 
                            <Button 
                                as={Link}
                                to= {`/events/${id}`} 
                                color="teal" 
                                floated="right" 
                                content="View" 
                            /> : 
                            <Modal
                            trigger={<Button 
                                        color="teal" 
                                        floated="right" 
                                        content="View"  
                                        onClick={this.handleOpen}
                                    />}
                            open={this.state.modalOpen}
                            onClose={this.handleClose}
                            basic
                            size='small'
                          >
                            <Header icon='browser' content='You are not logged in yet' />
                            <Modal.Content>
                              <h3>Please login first and then click on to view event details.</h3>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='checkmark' /> Got it
                              </Button>
                            </Modal.Actions>
                          </Modal>}
                            
                           {/*  <Button 
                                as="a" 
                                color="red" 
                                floated="right" 
                                content="Delete" 
                                onClick={() => {this.handleDelete(this.props.event.id)}}
                            /> */}
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment.Group>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListItem);
