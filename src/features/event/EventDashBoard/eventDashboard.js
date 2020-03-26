import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';

class eventDashboard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <EventList/>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
};

export default eventDashboard;
