import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { Message } from 'semantic-ui-react';

const mapStateToProps = state => {
    return {
        loginError : state.authReducer.loginError
    }
  }

class eventDashboard extends Component {
    render() {
        return (
            <div>
                {this.props.loginError && <Message negative>
                                            <Message.Header>Login Error!</Message.Header>
                                            <p>The username or password is not correct.</p>
                                          </Message>}
                <Grid>
                    <Grid.Row>
                        <EventList/>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
};

export default connect(mapStateToProps, null)(eventDashboard);
