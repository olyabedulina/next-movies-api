import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from "./Checkbox";

describe('Components :: Checkbox snapshots:', () => {
    it('Test :: Checkbox component', () => {
        const actual = renderer
            .create(<Checkbox checked={true} data='1'>Test name</Checkbox>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Checkbox component', () => {
        const actual = renderer
            .create(<Checkbox checked={false} data='Abc'>Checkbox</Checkbox>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: Checkbox component', () => {
        const actual = renderer
            .create(<Checkbox />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });
});
