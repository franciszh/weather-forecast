import React from "react";
import ForecastList from './ForecastList';

import { shallow } from 'enzyme';

describe('Forecast List ', () => {
    describe('Forecast Items ', ()=>{
        const weathers = 
        [{
            code: 28,
            text : 'sunny',
            low : 33,
            high : 67,
            date : '17 Nov 2017',
            day : 'Sun'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '18 Nov 2017',
            day : 'Mon'
        }]
        it('should skip the first one', ()=>{
            const render = shallow(<ForecastList weathers={weathers}/>);
            expect(render.find('ForecastItem').prop('weather')).toEqual({
                code: 39,
                text : 'rainy',
                low : 44,
                high : 69,
                date : '18 Nov 2017',
                day : 'Mon'
            });
        });

        it('should render one item', ()=>{
            const render = shallow(<ForecastList weathers={weathers}/>);
            expect(render.find('ForecastItem')).toHaveLength(1);
        }); 
    });

    describe('Over five forecast Items ', ()=>{
        const weathers = 
        [{
            code: 28,
            text : 'sunny',
            low : 33,
            high : 67,
            date : '17 Nov 2017',
            day : 'Sun'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '18 Nov 2017',
            day : 'Mon'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '19 Nov 2017',
            day : 'Mon'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '20 Nov 2017',
            day : 'Mon'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '21 Nov 2017',
            day : 'Mon'
        },
        {
            code: 39,
            text : 'rainy',
            low : 44,
            high : 69,
            date : '22 Nov 2017',
            day : 'Mon'
        }]
        it('should only render 5 items', ()=>{
            const render = shallow(<ForecastList weathers={weathers}/>);
            expect(render.find('ForecastItem')).toHaveLength(5);
        });
    });

    describe('Empty forecast Items ', ()=>{
        const weathers = [];
        it('should render nothing', ()=>{
            const render = shallow(<ForecastList weathers={weathers}/>);
            expect(render.find('ForecastItem')).toHaveLength(0);
        }); 
    });

    describe('CurrentWeatherItem ', ()=>{
        const curWeatherItem = {
            code: 39,
            text : 'rainy',
            temp : 44,
            date : '22 Nov 2017'
        }
        const weathers = [];
        it('should render correctly', ()=>{
            const render = shallow(<ForecastList currentWeather={curWeatherItem} weathers={weathers}/>);
            expect(render.find('CurWeatherItem').prop('currentWeather')).toEqual({
                code: 39,
                text : 'rainy',
                temp : 44,
                date : '22 Nov 2017'
            });
        });
    });

});
