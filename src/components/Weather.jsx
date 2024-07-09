import React from 'react'
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function Weather({ weatherData }) {
    const formatDay = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'EEEE', { locale: fr });
    }

    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'd MMMM', { locale: fr });
    }

    return (
        <>
            {weatherData && (
                <div className='weather-card'>
                    <div className="location">
                        <h2 className="city-name">{weatherData.city_name}</h2>
                        <p className="country-name">{weatherData.country_code}</p>
                    </div>
                    <div className="days">
                        {weatherData.data.slice(0, 5).map((day, i) => (
                            <div className="day" key={i}>
                                <div className="date">
                                    <p>{formatDay(day.datetime)}</p>
                                    <p>{formatDate(day.datetime)}</p>
                                </div>
                                <div className="weather">
                                    <img
                                        src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                                        alt=""
                                    />
                                    <p>{day.weather.description}</p>
                                    <p>{Math.round(day.temp)}°C</p>
                                    <p><i class="fa-solid fa-wind"></i> {day.wind_spd} km/h</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
