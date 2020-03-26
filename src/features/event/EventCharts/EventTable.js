import React, {Component} from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

class EventTable extends Component {
    render() {
        return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Host</Table.HeaderCell>
                    <Table.HeaderCell>Event Name</Table.HeaderCell>
                    <Table.HeaderCell>Event Category</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Venue</Table.HeaderCell>
                    <Table.HeaderCell>How many people join</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.eventData.map((el, index) => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={el.hostPhotoURL} rounded size='mini' />
                                    <Header.Content>
                                        {el.hostedBy}
                                    <Header.Subheader>Organizer</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                </Table.Cell>
                                <Table.Cell textAlign="center">{el.title}</Table.Cell>
                                <Table.Cell textAlign="center">{el.category}</Table.Cell>
                                <Table.Cell textAlign="center">{el.city}</Table.Cell>
                                <Table.Cell textAlign="center">{el.venue}</Table.Cell>
                                <Table.Cell textAlign="center">{el.attendees.length}</Table.Cell>
                          </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        )
    }
}

export default EventTable;