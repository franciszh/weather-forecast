import React from "react";
import {convertWeatherCodeToClass} from "../helper"

const CurWeatherItem = ({currentWeather}) => {
  if(!currentWeather){
      return (
          <div className="forecastList__placeholder">
              No data
          </div>
      );
  }
  let weatherClass = convertWeatherCodeToClass(currentWeather.code);
  return (
      <div className="forecast forecast--spaceAround">
          <i className={`wi ${weatherClass}`}></i>
          <div className="forecast__text">
              {currentWeather.text}
          </div>
          <div className="forecast__temp">
            Temperature:<br/>{currentWeather.temp}
          </div>
          <div className="forecast__right">
              Now
          </div>
      </div>
  );
};

export default CurWeatherItem;
