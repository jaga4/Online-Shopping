import { useEffect, useState, useCallback } from "react";
import BackToTopButton from "../HomePage/BackToTopComponent";
import CardsComponent from "../HomePage/CardsComponent";
import Footer from "../HomePage/FooterComponent";
import NavbarComponent from "../HomePage/Navbar";
import products from '../ProductPage/ProductApi';
import './Product.css'; 
import { useLocation } from "react-router-dom";

const Product = () => {
   const location=useLocation();
   const params = new URLSearchParams(location.search);
//    const initialCategory = location.state?.category || '';
const initialCategory = params.get('category') || '';
// console.log('Category from URL:', initialCategory);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState([0, 100000]);


    const filterProducts = useCallback(() => {
        let updatedProducts = products;
        if (category) {
            updatedProducts = updatedProducts.filter(product => product.category === category);
        }
        updatedProducts = updatedProducts.filter(product => {
            const price = parseInt(product.price.replace(/[^0-9]/g, ''), 10);
            return price >= priceRange[0] && price <= priceRange[1];
        });
        setFilteredProducts(updatedProducts);
    }, [category, priceRange]);

    useEffect(() => {
        filterProducts();
    }, [category, priceRange, filterProducts]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handlePriceRangeChange = (e, index) => {
        const value = Number(e.target.value);
        setPriceRange((prevRange) => {
            const newRange = [...prevRange];
            newRange[index] = value;
            return newRange;
        });
    };


    return (
        <div>
            <NavbarComponent />
            <div className="filter-container">
                <div className="category-filter">
                    <h4>Category</h4>
                    <select onChange={handleCategoryChange} value={category}>
                        <option value="">All</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tshirt">Tshirt</option>
                        <option value="Toy">Toy</option>
                    </select>
                </div>
                <div className="price-range-filter">
                    <h4>Price Range</h4>
                    <input
                        type="number"
                        min="0"
                        max="100000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(e, 0)}
                    />
                    <input
                        type="number"
                        min="0"
                        max="100000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceRangeChange(e, 1)}
                    />
                    <p>Range: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
                </div>
            </div>
            <CardsComponent Products={filteredProducts} Title="Products"/>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default Product;
