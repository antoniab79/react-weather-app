import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
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
 
    function handleSubmit(event) {
        event.preventDefault();
        searchCity();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function searchCity() {
        const apiKey = "1e5e2f20350d3toa44fe9d489eb954a7";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
                <WeatherInfo data={weatherData} />
                </div>
        );
    } else  {
    searchCity();
    return "Loading...";
    }
}