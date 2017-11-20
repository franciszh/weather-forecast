import React from 'react';
import { ajax } from 'jquery';
import { searchWeather, convertWeatherCodeToClass } from '../src/helper'

jest.mock('jquery', () => ({
  ajax: jest.fn(),
}));

describe('helper ',() => {
  describe('searchWeather', () => {
    it('should make ajax call with correct parameters', () => {
      const callback = jest.fn();
      
      searchWeather('', callback);
    
      const ajaxProps = ajax.mock.calls[0][0];
      expect(ajaxProps.data).toEqual({
        format: "json",
         q: "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='')"
      });
      expect(ajaxProps.dataType).toEqual("jsonp")
      expect(ajaxProps.jsonp).toEqual("callback")
      expect(ajaxProps.url).toEqual("http://query.yahooapis.com/v1/public/yql")
    });
  });

  describe('convertWeatherCodeToClass ', () => {
    it('should return wi-windy when code = 24', () => {
      const code = 24;
      expect(convertWeatherCodeToClass(code)).toBe('wi-windy');
    });
    it('should return wi-thunderstorm when code is not in the dic', () => {
      const code = 99;
      expect(convertWeatherCodeToClass(code)).toBe('wi-thunderstorm');
    });
  });
});

