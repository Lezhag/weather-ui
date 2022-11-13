import { useState } from 'react';

export const Journal = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [feeling, setFeeling] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <>
            <header>Weather Journal</header>
            <form className="form">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="City" required value={city}/>

                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" placeholder="Country" value={country}/>

                <label htmlFor="feeling">How are you feeling?</label>
                <textarea id="feeling" name="feeling" placeholder="I am feeling..." value={feeling}/>

                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
        </>
    )
}
