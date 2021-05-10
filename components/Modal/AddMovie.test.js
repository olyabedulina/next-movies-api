import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

const mockStore = configureStore([]);

import AddMovie from "./AddMovie";

describe('Components :: Add Movie unit tests:', () => {

    beforeEach(() => {
        let store = mockStore({ movieList: [ { A: 'A'}, { B: 'B'}] });

        render(
            <Provider store={store}>
                <AddMovie />
            </Provider>
        );
    });

    it('Find title input by placeholder', () => {
        expect(screen.getByPlaceholderText('Title here')).toBeInTheDocument();
    });

    it('Find title input by placeholder and check to be empty', () => {
        expect(screen.getByPlaceholderText('Title here')).toBeEmptyDOMElement();
    });

    it('Find date input by placeholder', () => {
        expect(screen.getByPlaceholderText('Select Date')).toBeInTheDocument();
    });

    it('Find formButtons by test id', () => {
        expect(screen.getByTestId('formButtons')).toBeInTheDocument();
    });

    it('Find Select genre by text', () => {
        expect(screen.getByText(/Select genre/i)).toBeInTheDocument();
    });

    it('Find Runtime by label text', () => {
        expect(screen.getByLabelText('Runtime')).toBeVisible();
    });

});
