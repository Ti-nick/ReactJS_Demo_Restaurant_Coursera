import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
})