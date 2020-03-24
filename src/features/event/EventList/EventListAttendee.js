import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
    
    render() {
        const url = this.props.src;
        return (
              <List.Item>
                <Image avatar src={url}/>
              </List.Item>  
        )
    }
}

export default EventListAttendee;
