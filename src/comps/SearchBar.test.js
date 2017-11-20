import React from 'react';
import { shallow } from 'enzyme';

import SearchBar, { processWeatherData } from './SearchBar';
import { searchWeather } from "../helper";

jest.mock('../helper', () => ({
    searchWeather: jest.fn(),
}));

describe('Search bar ', ()=>{
    describe('input', () => {
        it('should display input element', () => {
            const render = shallow(<SearchBar />);
            expect(render.find('input')).toHaveLength(1);
        });
        it('should have city initial state', () => {
            const render = shallow(<SearchBar />);
            expect(render.state().city).toBe('');
        });
        it('should update state when input change', () => {
            const render = shallow(<SearchBar />);
            render.find('input').simulate('change', {target: {value: 'My new value'}});
            expect(render.state().city).toBe('My new value');
        });
    });
    describe('button', () => {
        it('should display button', () => {
            const render = shallow(<SearchBar />);
            expect(render.find('button')).toHaveLength(1);
            expect(render.find('button').text()).toBe('Search');
        });
        it('should call searchWeather when click button', () => {
            const render = shallow(<SearchBar />);
            render.find('button').simulate('click');
            expect(searchWeather).toHaveBeenCalled();
            expect(searchWeather.mock.calls[0][0]).toBe('');
        })
    });
    
    describe('processWeatherData', () => {
        it('should get weathers and current weather', () => {
            const data = {
                query: {
                    results: {
                        channel: {
                            item: { 
                                forecast: 'forecast',
                                condition: 'condition',
                            }
                        }
                    }
                }
            }
            const { currentWeather, weathers } = processWeatherData(data);
            expect(currentWeather).toBe('condition');
            expect(weathers).toBe('forecast');
        });

        it('should return empty when there is error', () => {
            const data = {
                query: { error: {} }
            }
            const { currentWeather, weathers } = processWeatherData(data);
            expect(currentWeather).toBeUndefined();
            expect(weathers).toBeUndefined();
        });

        it('should return empty when there is no results', () => {
            const data = {
                query: {}
            }
            const { currentWeather, weathers } = processWeatherData(data);
            expect(currentWeather).toBeUndefined();
            expect(weathers).toBeUndefined();
        });
    });
});

