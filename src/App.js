import './styles.css';
import { useEffect, useState } from 'react';
import { Journal } from './components/Journal';
import { WeatherInfo } from './components/WeatherInfo';
import data from './mock.json'

function App() {
    const [weatherData, setWeatherData] = useState(data);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/all');
            const data = await response.json();
            setWeatherData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Journal/>
            <WeatherInfo data={weatherData}/>
        </>
    )
}

export default App;
