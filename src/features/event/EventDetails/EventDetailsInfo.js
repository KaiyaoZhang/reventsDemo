import React from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import EventDetailedMap from './EventMap';
import HostDetailModal from './HostDetails';

const EventDetailsInfo = ({description, date, venue, venueLatLng, hostedBy, hostPhotoURL}) => {
    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="user" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <HostDetailModal hostedBy={hostedBy} hostPhotoURL={hostPhotoURL}/>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        {description}
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        {date}
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{venue}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="picture" size="large" color="teal" />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Link to='/gallery'>
                            <span>See more pictures</span>
                        </Link>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <EventDetailedMap
                    lat={venueLatLng.lat}
                    lng={venueLatLng.lng}
                />
            </Segment>
        </Segment.Group>
    )
}

export default EventDetailsInfo;
