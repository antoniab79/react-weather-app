import React, { useState } from 'react';
import FormattedDate from './FormattedDate';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            description: response.data.condition.description,
            icon_url: response.data.condition.icon_url
        });
    }

    if(weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                    <div className="weather-forecast-container">
                    <div id="icon">
                  <img
                    src={weatherData.icon_url}
                    alt={weatherData.description} 
                  />
                </div>
                <div className="temperature">{Math.round(weatherData.temperature)}</div>                               
                <div className="unit">°C</div>
                </div>
                </div>                  
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/ph`</li>
                        </ul>
                    </div>
                </div>
                </div>
        );
    } else  {
    const apiKey = "1e5e2f20350d3toa44fe9d489eb954a7";
    let city = "New York"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    }
}