import React, {Component} from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import TextInput from '../../../app/form/TextInput';
import SelectInput from '../../../app/form/SelectInput';
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
    city: isRequired('city')
  });

class EventForm extends Component {

    onFormSubmit = (values) => {
        const id = this.props.match.params.id;
        if(id){
            const updateEvent = {
                ...values,
                attendees: [
                    ...values.attendees,
                    {
                        name: values.firstName,
                        photoURL: '/img/user.png'
                    }
                ]
            }
            this.props.updateEvent(updateEvent);
            this.props.history.push(`/events/${id}`);
        } 
            //this.props.history.push('/events');
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
                            <Header sub color='teal' content='Event Information'/>
                            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Field name='hostedBy' component={TextInput} placeholder='Event Host'/>
                            <Field name='title' component={TextInput} placeholder='Event Title' />
                            <Field 
                                name='category' 
                                component={SelectInput} 
                                placeholder='Event Category'
                                type='text'
                                options={category}
                                />
                            <Field name='city' component={TextInput} placeholder='City'/>
                            <Header sub color='teal' content='Your Information'/>
                            <Field
                                name='firstName'
                                component={PlaceInput}
                                placeholder='First Name'
                            />
                            <Field
                                name='lastName'
                                component={PlaceInput}
                                placeholder='Last Name'
                            />
                            <Field
                                name='email'
                                component={PlaceInput}
                                placeholder='Email'
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