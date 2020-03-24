import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        eventsData: state.eventReducers
    }
}

class EventList extends Component {
    render() {
        const {eventsData} = this.props;
        return (
            <Fragment>
                {eventsData.map(e => (
                    <EventListItem event={e} key={e.id}/>
                ))}
            </Fragment>    
        )
    }
}


export default connect(mapStateToProps, null)(EventList);
