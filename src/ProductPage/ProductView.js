import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarComponent from "../HomePage/Navbar";
import Footer from "../HomePage/FooterComponent";
import BackToTopButton from "../HomePage/BackToTopComponent";
import products from '../ProductPage/ProductApi';
import './ProductView.css';
import { useCart } from '../CartComponent/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductView = () => {
    const { id } = useParams();
    const {addToCart}=useCart();
    // console.log('Product ID:', id);
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);

    if (!product) {
        return <div className='text-center my-5'>No product found</div>;
    }

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);

    const handleBuyNow = () => {
        addToCart(product); // Add product to cart
        navigate('/cart'); // Navigate to cart
    };

    return (
        <div>
            <NavbarComponent />
            <div className='container my-5'>
                <div className='row justify-content-center mt-5'>
                    <h1 className='text-center'><u>Product Details</u></h1>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-6 col-md-8 col-sm-12 d-flex justify-content-center'>
                        <img className='product-image img-fluid' src={product.src} alt={product.name} />
                    </div>
                    <div className='col-lg-6 col-md-8 col-sm-12'>
                        <div className='product-info'>
                            <h1>{product.name}</h1>
                            <div className='product-rating'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star'></i>
                            </div>
                            <div className='product-price'>{product.price}</div>
                            <div className='product-description'>{product.desc}</div>
                            <div className='offers'>
                            </div>
                            <div className='button-container'>
                            <button className='button btn btn-primary' onClick={() => addToCart(product)}>ADD TO CART</button>
                            <button className='button btn btn-success' onClick={handleBuyNow}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <h2><u>Related Products</u></h2>
                </div>
                <div className='row justify-content-center mt-5'>
                    {relatedProducts.map(relatedProduct => (
                        <div key={relatedProduct.id} className='col-lg-3 col-md-4 col-sm-6 related-product-item mb-4'>
                            <Link to={`/products-view/${relatedProduct.id}`}>
                                <img src={relatedProduct.src} alt={relatedProduct.name} className='related-product-image img-fluid' />
                                <div className='related-product-info mt-2'>
                                    <div style={{ color: 'black' }}>{relatedProduct.name}</div>
                                    <div className='product-rating-Related'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star'></i>
                                    </div>
                                    <div className='related-product-price'>{relatedProduct.price}</div>
                                </div>
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

export default ProductView;
