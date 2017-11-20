import React from 'react';
import ForecastItem from './ForecastItem';

import { shallow } from 'enzyme';

describe('Forecast Item ',() => {
  const weather = 
  {
    code: 28,
    text : 'sunny',
    low : 33,
    high : 67,
    date : '17 Nov 2017',
    day : 'Sun'
  }
  it('should render weather icon correctly',() => {
    expect(shallow(<ForecastItem weather={weather}/>).contains(
      <i className = "wi wi-day-cloudy"></i>
    )).toBe(true);
  });

  it('should render weather text correctly',() => {
    expect(shallow(<ForecastItem weather={weather}/>).contains(
      <div className="forecast__text">
      sunny
      </div>
    )).toBe(true);
  });

  it('should render weather temperatures correctly',() => {
    expect(shallow(<ForecastItem weather={weather}/>).contains(
      <div className="forecast__temp">
        low: 33
        <br/>
        high: 67
      </div>
    )).toBe(true);
  });
  
  it('should render weather date/day correctly',() => {
    expect(shallow(<ForecastItem weather={weather}/>).contains(
      <div className="forecast__right">
        17 Nov 2017
        <br/>
        Sun
      </div>
    )).toBe(true);
  });

  it('should render no data ',() => {
    expect(shallow(<ForecastItem weather={weather}/>).contains(
      <div className="forecast__right">
        17 Nov 2017
        <br/>
        Sun
      </div>
    )).toBe(true);
  });
});
