import React from 'react';
import './Weather.css';

export default function Weather() {
    return (
        <div className="Weather">
            
            <form>
                <div className="row">
                    <div className="col-9">
            <input type="search" placeholder="Type a city..." className="form-control" />
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
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
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy" />
                    19°C
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
    )
}