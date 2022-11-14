import './styles.css';
import { useEffect, useState } from 'react';
import { Journal } from './components/Journal';
import { WeatherInfo } from './components/WeatherInfo';
import { prefix } from './const';
import data from './mock.json'

function App() {
    const [weatherData, setWeatherData] = useState(data);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${prefix}/all`);
            const data = await response.json();
            setWeatherData(data);
        }
        fetchData();
    }, []);

    return (
        <main className="layout">
            <Journal setWeatherData={setWeatherData}/>
            <WeatherInfo data={data}/>
        </main>
    )
}

export default App;
