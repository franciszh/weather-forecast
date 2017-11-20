import React from "react";
import ForecastItem from "./ForecastItem";
import CurWeatherItem from "./CurWeatherItem"

const ForecastList = ({weathers, currentWeather}) => {
    const forecasts = weathers.map((weather, index)=>{
        if(index < 6 && index > 0){
            return <ForecastItem key={weather.date} weather={weather}/>
        }
    })
    return (
        <div className="forcast">
            <CurWeatherItem currentWeather={currentWeather}/>
            {forecasts}
        </div>
    );
};
export default ForecastList;
