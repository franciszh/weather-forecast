import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App ', () => {
    describe('Search Bar', () => {
        it('should render correctly', () => {
            expect(shallow(<App />).find('SearchBar')).toHaveLength(1);    
        });
    });

    describe('Forecast List', () => {
        it('should render correctly', () => {
            expect(shallow(<App />).find('ForecastList')).toHaveLength(1);    
        });

        it('should take the stats as props', () => {
            const render = shallow(<App />);
            expect(render.find('ForecastList').prop('weathers')).toEqual([]);
            expect(render.find('ForecastList').prop('currentWeather')).toBeNull();
        })
    });

});