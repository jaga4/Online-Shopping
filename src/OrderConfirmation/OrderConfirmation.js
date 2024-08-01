import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderConfirmation.css'; 
import NavbarComponent from '../HomePage/Navbar';
import Footer from '../HomePage/FooterComponent';
import BackToTopButton from '../HomePage/BackToTopComponent';
import src from '../Images/OrderConf.jpg'

const OrderConfirmation = () => {
    const location = useLocation();
    // const history = useHistory();
    const { email, orderNumber } = location.state;

    return (
        <div>
            <NavbarComponent/>
        <div className="order-confirmation">
        <h2 className="text-center"><u>Order Confirmation</u></h2>
            <div className="container mt-5 text-center">
                <img src={src} alt="Success" className="confirmation-logo" />
                <h2 className='Thanks'>Thanks for your purchase!</h2>
                <p className='conf'>A confirmation email has been sent to <strong>{email}</strong></p>
                <p className='conf'>Order No: {orderNumber}</p>
                <p className='conf'>Order Status:<span className='badge badge-danger' style={{marginLeft:"4px"}}>Pending...</span> </p>
                {/* <button className="btn btn-primary" onClick={() => history.push('/')}>Return Home</button> */}
                <Link to="/" className="btn btn-primary">
                            Return to Home
                        </Link>
            </div>
        </div>
        <Footer/>
        <BackToTopButton/>
        </div>
    );
};

export default OrderConfirmation;
