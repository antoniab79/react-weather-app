import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay temp={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        const apiKey = "1e5e2f20350d3toa44fe9d489eb954a7";
        let city = props.data.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}