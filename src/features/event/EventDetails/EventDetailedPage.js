import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
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
        const {title, date, hostedBy, description, attendees, category} = data[0];
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailsHeader 
                        title={title} 
                        date={date} 
                        hostedBy={hostedBy} 
                        category={category}
                        id={id}
                    />
                    <EventDetailsInfo description={description} date={date}/>
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