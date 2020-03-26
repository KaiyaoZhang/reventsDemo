import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';
import { Grid } from 'semantic-ui-react';
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
                    <Grid.Column width={8} key={e.id} style={{marginBottom: '2%'}}>
                        <EventListItem event={e}/>
                    </Grid.Column>
                ))}
            </Fragment>   
        )
    }
}


export default connect(mapStateToProps, null)(EventList);
