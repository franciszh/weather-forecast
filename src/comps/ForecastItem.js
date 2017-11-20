import React from "react";
import {convertWeatherCodeToClass} from "../helper"

const ForecastItem = ({weather}) => {
  let weatherClass = convertWeatherCodeToClass(weather.code);
  return (
      <div className="forecast">
          <div className="forecast__left">
              <i className={`wi ${weatherClass}`}></i>
              <div className="forecast__text">
                  {weather.text}
              </div>
              <div className="forecast__temp">
                  low: {weather.low}
                  <br/>
                  high: {weather.high}
              </div>
          </div>
          <div className="forecast__right">
              {weather.date}
              <br/>
              {weather.day}
          </div>
      </div>
  );
};

export default ForecastItem;
