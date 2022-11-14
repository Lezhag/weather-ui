import { useState } from 'react';
import './style.css';
import { prefix } from '../../const';

export const Journal = ({ setWeatherData }) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [feeling, setFeeling] = useState('');

    const addEntry = async (e) => {
        e.preventDefault();
        const payload = {
            city,
            country,
            feeling,
        }
        const response = await fetch(`${prefix}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        setWeatherData(data);
    }

    return (
        <div className="weather-journal">
            <h3>Weather Journal</h3>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" value={country}
                           onChange={(e) => setCountry(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="feeling">How are you feeling?</label>
                    <input type="text" id="feeling" name="feeling" value={feeling}
                           onChange={(e) => setFeeling(e.target.value)}/>
                </div>

                <button type="submit" onClick={addEntry}>Submit</button>
            </form>
        </div>
    )
}
