/*global google*/
import React, {Component} from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextInput from '../../../app/form/TextInput';
import inputTextArea from '../../../app/form/inputTextArea';
import SelectInput from '../../../app/form/SelectInput';
import DatePicker from '../../../app/form/DateInput';
import PlaceInput from '../../../app/form/PlaceInput';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';


const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let eventData = {};

    if(eventId) {
        eventData = state.eventReducers.filter(event => event.id === eventId);
    }
    
    return {
        initialValues: eventData[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEvent: (event) => dispatch(addEvent(event)),
        updateEvent: (event) => dispatch(updateEvent(event))
    }
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate = combineValidators({
    title: isRequired({ message: 'The event title is required' }),
    category: isRequired({ message: 'Please provide a category' }),
    description: composeValidators(
      isRequired({ message: 'Please enter a description' }),
      hasLengthGreaterThan(4)({ message: 'Description needs to be at least 5 characters' })
    )(),
    city: isRequired('city'),
    venue: isRequired('venue'),
    date: isRequired('date')
  });

class EventForm extends Component {
    state = {
        cityLatLng: {},
        venueLatLng: {}
      };

    handleCitySelect = selectedCity => {
        geocodeByAddress(selectedCity)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
            this.setState({
                cityLatLng: latlng
            });
            })
            .then(() => {
            this.props.change('city', selectedCity);
            });
    };  

    handleVenueSelect = selectedVenue => {
        geocodeByAddress(selectedVenue)
          .then(results => getLatLng(results[0]))
          .then(latlng => {
            this.setState({
              venueLatLng: latlng
            });
          })
          .then(() => {
            this.props.change('venue', selectedVenue);
          });
      };
   
    onFormSubmit = (values) => {
        const id = this.props.match.params.id;
        if(id){
            this.props.updateEvent(values);
            this.props.history.push(`/events/${id}`);
        }else{
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: '/img/user.png',
                attendees: [
                    {
                      id: 'a',
                      name: 'Bob',
                      photoURL: 'https://randomuser.me/api/portraits/men/80.jpg'
                    },
                    {
                      id: 'b',
                      name: 'Tom',
                      photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
                    }
                  ]
            }

            this.props.addEvent(newEvent);
            this.props.history.push('/events');
        }
        
    }

    /* handleOnChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    } */

    render() {
        return (
            <Grid>
                <Grid.Column width={11}>
                    <Segment>
                            <Header sub color='teal' content='Event Details'/>
                            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='title' component={TextInput} placeholder='Event Title' />
                            <Field 
                                name='category' 
                                component={SelectInput} 
                                placeholder='Event Category'
                                type='text'
                                options={category}
                                />
                            <Field name='description' component={inputTextArea} placeholder='Event Description' rows={3}/>
                            <Header sub color='teal' content='Event Details'/>
                            <Field
                                name='city'
                                component={PlaceInput}
                                options={{ types: ['(cities)'] }}
                                onSelect={this.handleCitySelect}
                                placeholder='Event city'
                            />
                            <Field
                                name='venue'
                                component={PlaceInput}
                                options={{
                                location: new google.maps.LatLng(this.state.cityLatLng),
                                radius: 1000,
                                types: ['establishment']
                                }}
                                onSelect={this.handleVenueSelect}
                                placeholder='Event venue'
                            />
                            <Field name='venue' component={TextInput} placeholder='Event Venue' />
                            <Field
                                name="date"
                                type="text"
                                component={DatePicker}
                                dateFormat="YYYY-MM-DD HH:mm"
                                timeFormat="HH:mm"
                                showTimeSelect
                                placeholder="Date and Time of Event"
                            />
                            <Button positive type="submit">
                                Submit
                            </Button>
                            <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                            </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(reduxForm({form: 'eventForm', validate})(EventForm)));