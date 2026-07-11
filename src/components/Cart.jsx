import CartItem from "./CartItem";

function Cart({ cart, removeFromCart }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                        <span>{product.name}</span>
                        <span>${product.price.toFixed(2)}</span>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;