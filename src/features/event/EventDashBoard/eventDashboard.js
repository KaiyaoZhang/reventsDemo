import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/eventForm';

class eventDashboard extends Component {
    state={
        showEventForm: 'true'
    }

    toggleEventForm = () => {
        this.setState({
            showEventForm: !this.state.showEventForm
        })
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList/>
                    </Grid.Column>
                    {/* <Grid.Column width={6}>
                        {this.state.showEventForm && (
                            <React.Fragment>
                                <Button primary onClick={this.toggleEventForm}>CloseEventForm</Button>
                                <EventForm/>
                            </React.Fragment>
                        )}
                        {!this.state.showEventForm && <Button primary onClick={this.toggleEventForm}>OpenEventForm</Button>}
                    </Grid.Column> */}
                </Grid>
            </div>
        )
    }
};

export default eventDashboard;
