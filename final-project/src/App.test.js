import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm, { initializeTimes, updateTimes} from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(
        <Router>
            <BookingForm/>
        </Router>
    );
    const labelElement = screen.getByLabelText("Choose date");
    expect(labelElement).toBeInTheDocument();
})

test("Validate the initializeTimes function returns the correct expected value", () => {
    render(
        <Router>
            <BookingForm/>
        </Router>
    );
    expect(initializeTimes()).toEqual(["Select a time slot"])
});

test("Validate the updateTimes function returns the same value that is provided in the state", () => {
    render(
        <Router>
            <BookingForm/>
        </Router>
    );

    const initialTimes = ["Select a time slot"]
    const actionType = {
        toSelectADate: "selected_date",
        avaliableTime: ['mockupCorrespondingTimeSlots']
    }
    const nextState = updateTimes(initialTimes, actionType)
    const assumeResult = ['mockupCorrespondingTimeSlots']
    expect(nextState).toEqual(assumeResult)
});