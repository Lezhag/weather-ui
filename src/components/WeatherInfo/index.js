import './style.css';

const WeatherItem = ({ weather, feeling }) => {
    return (
        <ul className="weather-item">
            <li><strong>City:</strong>&nbsp;{weather.name}</li>
            <li><strong>Temperature:</strong>&nbsp;{weather.main.temp}F</li>
            <li><strong>Weather:</strong>&nbsp;{weather.weather[0].description}</li>
            <li><strong>Feeling:</strong>&nbsp;{feeling}</li>
        </ul>
    );
};

export const WeatherInfo = ({ data = [] }) => {
    return (
        <section className="weather-info">
            <h3>Weather Info</h3>
            {data.map((item, index) => (
                <WeatherItem key={index} weather={item.weather} feeling={item.feeling}/>
            ))}
        </section>
    )
}

