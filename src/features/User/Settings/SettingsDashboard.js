import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom';
import SettingNav from './SettingNav';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotoPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingDashboard = () => {
    return (
        <div>
            <Grid>
                <Grid.Column width={12}>
                    <Redirect exact from='/settings' to='/settings/basic'/>
                    <Route path='/settings/basic' render={() => (<BasicPage/>)}/>
                    <Route path='/settings/about' render={() => (<AboutPage/>)}/>
                    <Route path='/settings/photos' render={() => (<PhotoPage/>)}/>
                    <Route path='/settings/account' render={() => (<AccountPage/>)}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingNav/>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SettingDashboard;