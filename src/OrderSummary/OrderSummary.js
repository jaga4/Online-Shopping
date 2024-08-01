import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../CartComponent/CartContext";
import BackToTopButton from "../HomePage/BackToTopComponent";
import Footer from "../HomePage/FooterComponent";
import NavbarComponent from "../HomePage/Navbar";
import './OrderSummary.css';

const OrderSummary = () => {
    const { cartItems, calculateTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentNumber, setPaymentNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
        setPaymentNumber(''); 
    };

    const handlePaymentNumberChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        let formattedValue = '';
        if (paymentMethod === "Credit Card" || paymentMethod === "Debit Card") {
            for (let i = 0; i < value.length; i += 4) {
                if (i + 4 < value.length) {
                    formattedValue += value.substring(i, i + 4) + '-';
                } else {
                    formattedValue += value.substring(i, value.length);
                }
            }
        } else {
            formattedValue = value;
        }
        setPaymentNumber(formattedValue);
    };

    const handleInput = (e) => {
        const value = e.target.value.replace(/[^0-9-]/g, '');
        setPaymentNumber(value);
    };

    const generateOrderNumber = () => {
        return Math.floor(100000000 + Math.random() * 900000000);
    };

    const handleCheckout = (e) => {
        alert('Proceeding to Submit');
        e.preventDefault();
        const orderNumber = generateOrderNumber();
        navigate('/order-confirmation', { state: { email, orderNumber } });
    };

    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5">
                <h2 className="text-center"><u>Order Summary</u></h2>
                <div className="order-summary">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index} className="order-item">
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{Number(item.price).toFixed(2)}</td>
                                    <td>₹{(Number(item.price) * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="order-total">
                        <h4>Total Amount: ₹{calculateTotal().toFixed(2)}</h4>
                    </div>
                </div>
                <div className="shipping-form">
                    <h2 className="text-center"><u>Shipping Information</u></h2>
                    <form onSubmit={handleCheckout}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" minLength={10} maxLength={10} pattern="[0-9]*" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" className="form-control" id="zip" minLength={6} maxLength={6} pattern="[0-9]*" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="payment">Payment Methods</label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={paymentMethod} onChange={handlePaymentChange} required>
                                <option value="">Select Payment Method</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                        {paymentMethod && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="paymentNum">Enter a {paymentMethod} Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="paymentNum"
                                        value={paymentNumber}
                                        onChange={handlePaymentNumberChange}
                                        onInput={handleInput}
                                        placeholder={
                                            paymentMethod === "UPI"
                                                ? "UPI ID"
                                                : "1234-2345-4567-3456"
                                        }
                                        maxLength={paymentMethod === "UPI" ? 10 : 19}
                                        pattern="[0-9-]*"
                                  required  />
                                </div>
                                {(paymentMethod === "Credit Card" || paymentMethod === "Debit Card") && (
                                    <div className="form-group">
                                        <label htmlFor="paymentOtpText">OTP</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="paymentOtpText"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            maxLength="4"
                                      required  />
                                    </div>
                                )}
                            </>
                        )}
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default OrderSummary;
