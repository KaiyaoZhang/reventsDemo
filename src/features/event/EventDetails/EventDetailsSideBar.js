import React from 'react';
import {Segment, Item, Label} from 'semantic-ui-react';

const EventDetailsSideBar = ({attendees}) => {
    return (
            <React.Fragment>
              <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
              >
                People are Going
              </Segment>
              {attendees.map((person, index) => {
                  return (
                    <Segment attached key={index}>
                        <Item.Group divided>
                        <Item style={{ position: 'relative' }}>
                            <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                            ribbon='right'
                            >
                            Host
                            </Label>
                            <Item.Image size='tiny' src={person.photoURL} />
                            <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>{person.name}</Item.Header>
                            </Item.Content>
                        </Item>
                        </Item.Group>
                    </Segment>
                  )
              })}
            </React.Fragment>
    )
}

export default EventDetailsSideBar;
