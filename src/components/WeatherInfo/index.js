const WeatherItem = ({ weather, feeling }) => {
    return (
        <div className="">
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.main.temp}</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Feeling: {feeling}</p>
        </div>
    );
};

export const WeatherInfo = (data = []) => {
    return (
        <section className="weather-info">
            <h2>Weather Info</h2>
            {data.map((item, index) => (
                <WeatherItem key={index} weather={item.weather} feeling={item.feeling}/>
            ))}
        </section>
    )
}

