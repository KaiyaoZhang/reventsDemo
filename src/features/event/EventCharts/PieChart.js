import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Chart } from "react-google-charts";

const mapStateToProps = state => {
    return {
        eventData: state.eventReducers
    }
}

class PieChart extends Component {
    render() {
        let [travel, food, drinks, culture, music] = [0,0,0,0,0]; 
        this.props.eventData.forEach(element => {
            if(element.category === 'travel'){
                travel++;
            }else if(element.category === 'food'){
                food++;
            }else if(element.category === 'drinks'){
                drinks++;
            }else if(element.category === 'culture'){
                culture++;
            }else if(element.category === 'music'){
                music++;
            }
        });
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['travel', travel],
                    ['food', food],
                    ['drinks', drinks],
                    ['culture', culture],
                    ['music', music],
                ]}
                options={{
                    title: 'Event Category',
                    backgroundColor:{fill:'transparent'},
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        )
    }
}

export default connect(mapStateToProps, null)(PieChart);
