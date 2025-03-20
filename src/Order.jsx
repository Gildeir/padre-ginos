
import { useState, useEffect, use } from "react";
import Pizza from "./Pizza"

const intl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

export default function Order () {
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState("");
    const [pizzaSize, setPizzaSize] = useState("L");
    const [loading, setLoading] = useState(true);
    console.log(pizzaType);
    
    let price, selectedPizza; 
    

    console.log("clicou:", selectedPizza);
    
async function fetchPizzaTypes() {
    try {
        const pizzaRes = await fetch("http://localhost:3000/api/pizzas");
        const pizzaJson = await pizzaRes.json();
        setPizzaTypes(pizzaJson);
        setLoading(false);
    } catch (error) {
        console.error("Error fetching pizzas:", error);
        setLoading(false);
    }
}

if (!loading && pizzaTypes.length > 0) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    if (selectedPizza) {
        price = intl.format(selectedPizza.sizes[pizzaSize]); 
    }
}

    useEffect(() => {
        fetchPizzaTypes();
    }, []);
    
    return (
        <div className="order">
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                            <select 
                                onChange={(e) => setPizzaType(e.target.value)}
                                name="pizza-type" 
                                value = { pizzaType }
                                >
                                <option value="" disabled>Select a pizza</option> {/* Default empty option */}
                                {pizzaTypes.map((pizza) => (
                                    <option key={pizza.id} value={pizza.id}>
                                        {pizza.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    checked={pizzaSize==="S"}
                                    type='radio'
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize==="M"}
                                    type='radio'
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                
                                <input
                                    checked={pizzaSize==="L"}
                                    type='radio'
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to cart</button>
                    <div className="order-pizza">
                        
                    {!loading && selectedPizza ? (
                        <Pizza
                            name={selectedPizza.name}
                            description={selectedPizza.description}
                            image={selectedPizza.image}
                        />
                    ) : (
                        <h1>Please, select a pizza!!</h1>
                    )}
                         <p>{price}</p>
                    </div>
                </div>
            </form>
        </div>
    );
}