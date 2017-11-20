import $ from "jquery";
export const searchWeather = (city, callback) => {
     $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')`,
            format: "json"
        },
        success: function( response ) {
            callback(response);
        },
        error: function (parsedjson, textStatus, errorThrown) {
            $('body').append(
                "parsedJson status: " + parsedjson.status + '</br>' + 
                "errorStatus: " + textStatus + '</br>' + 
                "errorThrown: " + errorThrown);        
             }
    });

};

export const convertWeatherCodeToClass = (code) => {
   let weatherDic = {
       3 : 'wi-thunderstorm',
       4 : 'wi-thunderstorm',
       5 : 'wi-rain-mix',
       11 : 'wi-showers',
       12 : 'wi-showers',
       24 : 'wi-windy',
       26 : 'wi-cloudy',
       27 : 'wi-night-cloudy',
       28 : 'wi-day-cloudy',
       29 : 'wi-night-cloudy',
       30 : 'wi-day-cloudy', 
       31 : 'wi-night-clear',
       32 : 'wi-day-sunny',
       33 : 'wi-night-clear',
       34 : 'wi-day-sunny'
   };
   return weatherDic[code]?weatherDic[code]:'wi-thunderstorm';
}



