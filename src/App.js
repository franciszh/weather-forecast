import React, {Component} from "react";
import SearchBar from "./comps/SearchBar";
import ForecastList from "./comps/ForecastList";
import style from './style/style.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        currentWeather: null,
        weathers: []
    };
  }

  setWeather(currentWeather, weathers){
    this.setState({
        currentWeather: currentWeather,
        weathers: weathers
    });
  }

  render(){
    return (
        <div className={style.app__container}>
            <SearchBar callback={this.setWeather.bind(this)}/>
            <ForecastList weathers={this.state.weathers} currentWeather={this.state.currentWeather}/>
        </div>
    );
  }
}

export default App;
