import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.temperature.current);
        setReady(true);
    }

    if(ready) {
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
                <h1>London</h1>
                <ul>
                    <li>
                        Saturday 11:00
                    </li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                    <div className="weather-forecast-container">
                    <div id="icon">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly Cloudy" 
                  />
                </div>
                <div className="temperature">{Math.round(temperature)}</div>                               
                <div className="unit">°C</div>
                </div>
                </div>                  
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 10%</li>
                            <li>Humidity: 61%</li>
                            <li>Wind: 7 mph</li>
                        </ul>
                    </div>
                </div>
                </div>
        );
    } else  {
    const apiKey = "1e5e2f20350d3toa44fe9d489eb954a7";
    let city = "New York"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."

    }
}