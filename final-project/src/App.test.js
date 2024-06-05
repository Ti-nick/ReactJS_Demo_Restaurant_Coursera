import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm, { initializeTimes, updateTimes} from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const labelElement = screen.getByLabelText("Choose date");
    expect(labelElement).toBeInTheDocument();
})

// test("Validate the initializeTimes function returns the correct expected value", () => {
//     render(<BookingForm />);
//     expect(initializeTimes()).toEqual(["17:00","18:00","19:00","20:00","21:00","22:00"])
// });

// test("Validate the updateTimes function returns the same value that is provided in the state", () => {
//     render(<BookingForm />);
//     const previousState = initializeTimes()
//     const mockUpState = ["17:00","18:00","20:00","21:00","22:00"]
//     const actionType = {type: "selected_date"}
//     const nextState = updateTimes(previousState, actionType)
//     expect(nextState).toEqual(mockUpState)
// });