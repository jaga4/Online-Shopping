import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        const items = storedCartItems ? JSON.parse(storedCartItems) : [];
        return items.map(item => ({
            ...item,
            price: parseFloat(item.price) || 0,  // Ensure price is a number
            quantity: parseInt(item.quantity, 10) || 1,  // Ensure quantity is a number
        }));
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        // console.log('Adding product to cart:', product);

        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                const updatedItems = prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                // console.log("Updated Cart Items (existing):", updatedItems);
                return updatedItems;
            } else {
                const priceString = product.price.replace(/[^\d.-]/g, ''); // Remove non-numeric characters
                const price = parseFloat(priceString);
                // console.log('Parsed price:', price);
                const newItems = [...prevItems, { ...product, quantity: 1, price: isNaN(price) ? 0 : price }];
                // console.log("Updated Cart Items (new):", newItems);
                return newItems;
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) => prevItems.map(item =>
            item.id === id ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            // console.log(`Calculating total - Price: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`);
            return total + itemTotal;
        }, 0);
    };

    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal, cartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
