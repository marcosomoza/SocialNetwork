import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) =>void;
}

export default function ActivityDetails( {activity: selectedActivity, closeForm, createOrEdit} : Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
     
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder='Title' value={activity.title} onChange={handleInputChange} name='title'/>
                <Form.TextArea placeholder='Description' value={activity.description} onChange={handleInputChange} name='description'/>
                <Form.Input placeholder='Category' value={activity.category} onChange={handleInputChange} name='category'/>
                <Form.Input placeholder='Date' value={activity.date} onChange={handleInputChange} name='date'/>
                <Form.Input placeholder='City' value={activity.city} onChange={handleInputChange} name='city'/>
                <Form.Input placeholder='Venue' value={activity.venue} onChange={handleInputChange} name='venue'/>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right'  type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}