import { useCart } from '../CartComponent/CartContext';
import NavbarComponent from '../HomePage/Navbar';
import Footer from '../HomePage/FooterComponent';
import BackToTopButton from '../HomePage/BackToTopComponent';
import './Cart.css';
import { Link } from 'react-router-dom';

const CartComponent = () => {
    const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

    const handleCheckout = () => {
        // Implement your checkout logic here
        alert('Proceeding to Checkout');
    };

    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5">
                <h2 className="text-center"><u>Your Cart</u></h2>
                {cartItems.length === 0 ? (
                    <p className="text-center">Your cart is empty</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item, index) => {
                            const price = Number(item.price);
                            const quantity = Number(item.quantity);
                            const total = price * quantity;
                            // console.log(`Price: ${price}, Quantity: ${quantity}, Total: ${total}`);

                            return (
                                <div key={index} className="cart-item">
                                    <img src={item.src} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h5>{item.name}</h5>
                                        <p>Price: ₹{price.toFixed(2)}</p>
                                        <p>Quantity:
                                            <input
                                                type='number'
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                            />
                                        </p>
                                        <p>Total: ₹{total.toFixed(2)}</p>
                                        <button className="btn btn-danger remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="cart-total">
                            <h4>Total Amount: ₹{calculateTotal().toFixed(2)}</h4>
                        </div>
                        <div className="checkout-button">
                            {/* <button className="btn btn-primary" onClick={handleCheckout}>Go to Checkout</button> */}
                            <Link to="/order-summary" onClick={handleCheckout} className="btn btn-primary">
                            Go to Checkout
                        </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default CartComponent;
