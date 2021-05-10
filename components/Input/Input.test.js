import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('Components :: Input snapshots:', () => {
    it('Test :: Input type = "text" component', () => {
        const actual = renderer
            .create(<Input
                id='title'
                name='title'
                value={0}
                className="fieldInput"
                placeholder='Title here'
                type='text'
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Input type = "date" component', () => {
        const actual = renderer
            .create(<Input
                id='selectDate'
                name='selectDate'
                className='fieldInput'
                placeholder='Select Date'
                type='date'
                value="20/03/1986"
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Input type = "text" with children component', () => {
        const actual = renderer
            .create(<Input
                id='title'
                name='title'
                value={0}
                className="fieldInput"
                placeholder='Title here'
                type='text'>Text</Input>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Input type = "text" with children component', () => {
        const actual = renderer
            .create(<Input
                id='checkbox'
                name='checkbox'
                value={0}
                className="fieldCheckbox"
                placeholder='Select genre'
                type='checkbox'>Checkbox</Input>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Input type = "text" with children component', () => {
        const actual = renderer
            .create(<Input
                id='text'
                name='textInput'
                value='Lorem Ipsum'
                onChange={() => { console.log('test') }}
                className="fieldText"
                placeholder='Select title'
                type='text'>OnChange input</Input>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });
});
