import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import moment from 'moment';
import EventDetailsSideBar from './EventDetailsSideBar';
import EventDetailsHeader from './EventDetailsHeader';
import EventDetailsInfo from './EventDetailsInfo';
import EventDetailsChat from './EventDetailsChat';

const mapStateToProps = (state) => {
    return {
        eventData: state.eventReducers
    }
}

class EventDetailedPage extends Component {
    render() {
        const id = this.props.match.params.id;
        const data = this.props.eventData.filter(event => event.id === id);
        const {title, date, hostedBy, description, attendees, category, venue, venueLatLng, hostPhotoURL} = data[0];
        const formatDate = moment(date).format('MMMM Do YYYY, h:mm a'); 
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailsHeader 
                        title={title} 
                        date={formatDate} 
                        hostedBy={hostedBy} 
                        category={category}
                        id={id}
                        attendees={attendees}
                    />
                    <EventDetailsInfo 
                        description={description} 
                        date={formatDate} 
                        venue={venue}
                        venueLatLng={venueLatLng}
                        hostedBy={hostedBy}
                        hostPhotoURL={hostPhotoURL}
                    />
                    <EventDetailsChat/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailsSideBar attendees={attendees}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, null)(EventDetailedPage);