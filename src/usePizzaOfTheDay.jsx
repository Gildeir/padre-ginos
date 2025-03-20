import {useState, useEffect, useDebugValue} from 'react';
import PizzaOfTheDay from './PizzaOfTheDay';

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
    useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}` :
        "loading..."
    );

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("http://localhost:3000/api/pizza-of-the-day");
            const data = await response.json();
            setPizzaOfTheDay(data);
        }
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
}