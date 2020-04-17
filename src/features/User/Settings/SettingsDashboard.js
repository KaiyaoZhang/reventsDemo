import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom';
import SettingNav from './SettingNav';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotoPage from './Photos/PhotosPage';
import AccountPage from './AccountPage';

const mapStateToProps = state => {
    return {
      user : state.authReducer.user,
      eventData: state.eventReducers
    }
  }
  
class SettingDashboard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={12}>
                        <Redirect exact from='/settings' to='/settings/about'/>
                        <Route path='/settings/basic' render={() => (<BasicPage/>)}/>
                        <Route path='/settings/about' render={() => (
                                <AboutPage 
                                    user={this.props.user}
                                    eventData={this.props.eventData}
                                    />
                            )}/>
                        <Route path='/settings/photos' render={() => (
                                <PhotoPage
                                    user={this.props.user}
                                    />
                            )}/>
                        <Route path='/settings/account' render={() => (<AccountPage/>)}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <SettingNav/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(SettingDashboard);