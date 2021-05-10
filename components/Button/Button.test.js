import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Components :: Button snapshots:', () => {
    it('Test :: "+ Add Movie" Button component', () => {
        const actual = renderer
            .create(<Button kind="aux" className="buttonAddMovie">+ Add Movie</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Search" Button component', () => {
        const actual = renderer
            .create(<Button type="submit" className="formButton">Search</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Reset" Button component', () => {
        const actual = renderer
            .create(<Button kind='alt' className="modalFooterButton">Reset</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Submit" Button component', () => {
        const actual = renderer
            .create(<Button type="submit" kind='main' className="modalFooterButton">Submit</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Go Back To Home" Button component', () => {
        const actual = renderer
            .create(<Button kind='alt' className="pageNotFoundButton">Go Back To Home</Button>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });
});
