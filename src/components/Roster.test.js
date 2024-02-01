// eslint-disable-next-line no-unused-vars
import { render, fireEvent,  screen } from '@testing-library/react';

/**
 * Attempts to mimic input from real user.
 * @see fireEvent
 */
import userEvent from '@testing-library/user-event';

import Roster from './Roster';
import {developers} from "../utils/rosterUtils";

describe('Roster', () => {
    test('renders input, button, and initial list', async () => {
        render(<Roster />);
        const inputElement = screen.getByPlaceholderText(/add new developer/i);
        const buttonElement = screen.getByRole('button', { name: /add to roster/i });
        const listItems = screen.queryAllByRole('listitem');

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(listItems.length).toBe(developers.length);
    });

    test('allows users to add developers to the list', async () => {
        render(<Roster />);
        const inputElement = screen.getByPlaceholderText(/add new developer/i);
        const buttonElement = screen.getByRole('button', { name: /add to roster/i });

        // Simulate user typing into the input field and clicking the "Add to List" button
        await userEvent.type(inputElement, 'New Guy');
        await userEvent.click(buttonElement);

        // Check if the new item was added to the list
        const listItemElement = screen.getByText(/new guy/i);
        expect(listItemElement).toBeInTheDocument();
    });

    test('does not add empty or whitespace-only items to the roster', async () => {
        render(<Roster />);
        const inputElement = screen.getByPlaceholderText(/add new developer/i);
        const buttonElement = screen.getByRole('button', { name: /add to roster/i });

        // Try to add an empty string
        await userEvent.type(inputElement, '   ');
        await userEvent.click(buttonElement);

        // Ensure no list items were added
        const listItems = screen.queryAllByRole('listitem');
        expect(listItems.length).toBe(developers.length);
    });
});
