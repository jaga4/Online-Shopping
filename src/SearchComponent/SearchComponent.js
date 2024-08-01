import React, { useState } from 'react';
import NavbarComponent from '../HomePage/Navbar';
import Footer from '../HomePage/FooterComponent';
import BackToTopButton from '../HomePage/BackToTopComponent';
import products from '../ProductPage/ProductApi';
import { Link } from 'react-router-dom';
import './SearchComponent.css';

const SearchPageComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5">
                <div className='mb-4'>
            <h2 className="text-center"><u>Search for Products</u></h2>
            </div>
                <div className="search-bar">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-item">
                            <Link to={`/products-view/${product.id}`} style={{textDecoration:"none"}}>
                                <img src={product.src} alt={product.name} />
                                <div>{product.name}</div>
                                <div className="product-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div style={{color:"black"}}>{product.price}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default SearchPageComponent;
