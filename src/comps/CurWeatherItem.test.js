import React from 'react';
import CurWeatherItem from './CurWeatherItem';

import { shallow } from 'enzyme';

describe('CurWeather Item ',() => {
  const curWeather = 
  {
    code: 33,
    text : 'sunny',
    temp : 69,
    date : 'whatever',
  }
  it('should render weather icon correctly',() => {
    expect(shallow(<CurWeatherItem currentWeather={curWeather}/>).contains(
      <i className = "wi wi-night-clear"></i>
    )).toBe(true);
  });

  it('should render weather text correctly',() => {
    expect(shallow(<CurWeatherItem currentWeather={curWeather}/>).contains(
      <div className="forecast__text">
      sunny
      </div>
    )).toBe(true);
  });

  it('should render weather temperature correctly',() => {
    expect(shallow(<CurWeatherItem currentWeather={curWeather}/>).find('.forecast__temp').text()).toBe('Temperature:69');
  });
  
  it('should render weather date/day correctly',() => {
    expect(shallow(<CurWeatherItem currentWeather={curWeather}/>).contains(
      <div className="forecast__right">
        Now
      </div>
    )).toBe(true);
  });

  describe('when it is blank ',() => {
    const curWeather = null;
    it('should render no data panel', () => {
      expect(shallow(<CurWeatherItem currentWeather={curWeather}/>).contains(
        <div className="forecastList__placeholder">
          No data
        </div>
      )).toBe(true);
    });

  });
});
