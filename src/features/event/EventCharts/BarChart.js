import React, {Component} from "react";
import { Chart } from "react-google-charts";

class BarChart extends Component {
    render() {
        let [num1, num2, num3, num4, num5, num6] = [0,0,0,0,0,0];
        this.props.eventData.forEach(element => {
            if(element.title === 'Tour of CN Tower'){
                num1 = element.attendees.length;
            }else if(element.title === 'Tour to Niagara Falls'){
                num2 = element.attendees.length;
            }else if(element.title === 'St.Lawrence Market'){
                num3 = element.attendees.length;
            }else if(element.title === 'Superb Janpanses Sushi'){
                num4 = element.attendees.length;
            }else if(element.title === 'Spring Music Concert'){
                num5 = element.attendees.length;
            }else{
                num6 = element.attendees.length;
            }
        });
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['City', 'Number Of People'],
                    ['Tour of CN Tower', num1],
                    ['Tour to Niagara Falls', num2],
                    ['St.Lawrence Market', num3],
                    ['Superb Janpanses Sushi', num4],
                    ['Spring Music Concert', num5],
                    ['Raptors Game', num6],
                ]}
                options={{
                    title: 'Popularity Of Each Event',
                    chartArea: { width: '37%' },
                    backgroundColor:{fill:'transparent'},
                    hAxis: {
                    title: 'Number Of People Joining',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Event Name',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        )
    }
}

export default BarChart;

