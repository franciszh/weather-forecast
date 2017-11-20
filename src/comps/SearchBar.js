import React, { Component } from "react";
import { searchWeather } from "../helper";

export const processWeatherData = (data) => {
    if(data.error || !data.query.results){
        return {};
    }
    const weathers = data.query.results.channel.item.forecast;
    const currentWeather = data.query.results.channel.item.condition;
    return { weathers, currentWeather };
}

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            city : ''
        };
    }
    
    getWeather(city, callback) {
        searchWeather(city,(data)=>{
            const { currentWeather, weathers } = processWeatherData(data);
            if (!currentWeather || !weathers) {
                return;
            }
            callback(currentWeather, weathers);
        });
    }

    render(){
        const {callback} = this.props;
        return (
            <div>
                <input onChange={(e) => this.setState({city:e.target.value})}/>
                <button onClick={() => this.getWeather(this.state.city, callback)}>Search</button>
            </div>
        );
    }

}

export default SearchBar;
