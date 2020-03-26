import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Grid, Container} from 'semantic-ui-react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import EventTable from './EventTable';


const mapStateToProps = state => {
    return {
        eventData: state.eventReducers
    }
}

class ChartsDashBoard extends Component {
    render() {
       return (
           <Fragment>
               <Grid>
                    <Grid.Row centered>
                        <EventTable eventData={this.props.eventData}/>
                   </Grid.Row>
                   <Grid.Row>
                        <Grid.Column width={8}>
                            <PieChart eventData={this.props.eventData}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <BarChart eventData={this.props.eventData}/>
                        </Grid.Column>
                   </Grid.Row>
               </Grid>
           </Fragment>
       ) 
    }
}

export default connect(mapStateToProps, null)(ChartsDashBoard);