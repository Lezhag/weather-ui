import { useState } from 'react';

export const Journal = () => {
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
        const response = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <header>Weather Journal</header>
            <form className="form">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>

                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>

                <label htmlFor="feeling">How are you feeling?</label>
                <input type="text" id="feeling" name="feeling" value={feeling} onChange={(e) => setFeeling(e.target.value)}/>

                <button type="submit" onClick={addEntry}>Submit</button>
            </form>
        </>
    )
}
