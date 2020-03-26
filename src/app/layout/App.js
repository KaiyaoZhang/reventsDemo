import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashBoard/eventDashboard';
import Navbar from '../../features/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import HomePage from '../../features/Home/homePage';
import EventForm from '../../features/event/EventForm/eventForm';
import Photos from '../../features/Gallery/photos';
import EventDetailedPage from '../../features/event/EventDetails/EventDetailedPage';
import PeopleDashBoard from '../../features/User/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/User/UserDetails/UserDetailedPage';
import SettingDashboard from '../../features/User/Settings/SettingsDashboard';
import ChartsDashBoard from '../../features/event/EventCharts/ChartsDashBoard';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <Route exact path='/' render={() => (
            <HomePage/>
          )}>
        </Route>
        <Route path='/(.+)' render={() => (
            <React.Fragment>
              <Navbar/>
              <Container className='main'>
                <Switch>
                    <Route exact path='/events' render={() => (
                      <EventDashboard/>
                    )}>
                    </Route>
                    <Route path='/events/:id' render={(props) => (
                      <EventDetailedPage
                        {...props}
                      />
                    )}>
                    </Route>
                    <Route path='/people' render={() => (
                      <PeopleDashBoard/>
                    )}>
                    </Route>
                    <Route path='/profile/:id' render={() => (
                      <UserDetailedPage/>
                    )}>
                    </Route>
                    <Route path='/settings' render={() => (
                      <SettingDashboard/>
                    )}>
                    </Route>
                    <Route path={['/createEvent', '/manage/:id']} render={(props) => (
                      <EventForm
                        {...props}
                      />
                    )}>
                    </Route>
                    <Route path='/gallery' render={() => (
                      <Photos/>
                    )}>
                    </Route>
                    <Route path='/dashboard' render={() => (
                      <ChartsDashBoard/>
                    )}>
                    </Route>
                </Switch>
              </Container>
          </React.Fragment>
        )}>
        </Route>
      </Router>
    </React.Fragment>
    );
  }
}

export default App;
