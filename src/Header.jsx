import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router"

export default function Header() {
    const [cart] = useContext(CartContext)
    return (
        <nav>
            <Link to={"/"}>
                <h1 className="logo">Padre Gino's Pizza</h1>
            </Link>

            <div className="nav-cart">
                <img src="/public/cart.png" alt="Carrinho" className="cart-icon" />
                <span className="nav-cart-number">{cart.length}</span>
            </div>
        </nav>
    );
}
