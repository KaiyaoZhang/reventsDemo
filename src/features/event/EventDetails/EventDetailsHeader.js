import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Segment, Item, Image, Header, Button, Icon} from 'semantic-ui-react';

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

class EventDetailsHeader extends Component {

  state= {
    like: 'ture',
    number: this.props.attendees.length
  }

  handleLike = () => {
    this.setState({
      like: 'false',
      number: ++this.props.attendees.length
    })
  }

  handleDislike = () => {
    this.setState({
      like: 'ture',
      number: --this.props.attendees.length
    })
  }

  render() {
    const {title, hostedBy, category, id} = this.props;
    return(
      <Segment.Group>
          <Segment basic attached="top" style={{ padding: '0' }}>
            <Image src={`/img/${category}.jpg`} fluid style={eventImageStyle} />
    
            <Segment basic style={eventImageTextStyle}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Header
                      size="huge"
                      content={title}
                      style={{ color: 'white' }}
                    />
                    <p>
                        Hosted by <strong>{hostedBy}</strong>
                    </p>
                    <p><strong>{this.state.number} people like it!</strong></p>
                  </Item.Content>  
                </Item>
              </Item.Group>
            </Segment>
          </Segment>
    
          <Segment attached="bottom">
            {this.state.like ==='ture' ? <Icon name='thumbs up outline' size='big' onClick={this.handleLike}/> : <Icon name='thumbs up' size='big' onClick={this.handleDislike}/>}
            <Button color="orange" floated="right" as={Link} to={`/join/${id}`}>JOIN THIS EVENT</Button>
    
            {/* <Button color="orange" floated="right" as={Link} to={`/manage/${id}`}>
              Manage Event
            </Button> */}
          </Segment>
        </Segment.Group>
    ) 
  }
}

export default connect(null, null)(EventDetailsHeader);
