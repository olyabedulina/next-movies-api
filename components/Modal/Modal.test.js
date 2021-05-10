import React from 'react'
import { render, screen } from '@testing-library/react'

import Modal from "./Modal";

describe('Components :: Modal unit tests:', () => {

    test('Modal is shown, it has close button and text children', () => {
        render(<Modal>Modal content</Modal>)

        const modal = screen.findByTestId('modal')
        const closeButton = screen.findByTestId('modalClose')
        const child = screen.findByText(/Modal content/i)

        expect(modal).toBeTruthy()
        expect(closeButton).toBeTruthy()
        expect(child).toBeTruthy()
    });

});
