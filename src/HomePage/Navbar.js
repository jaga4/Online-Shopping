import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link ,useNavigate} from 'react-router-dom';
import { useCart } from '../CartComponent/CartContext';

const NavbarComponent = () => {
    const { cartItemCount } = useCart();
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    }
    const handleCartClick = () => {
        navigate('/cart');
    };
  
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Online-Shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-grow-1 justify-content-center">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Products", path: "/products" },
                                { name: "Category", path: "/category" },
                                { name: "About Us", path: "/about" },
                                { name: "Contact Us", path: "/contact" }
                            ].map((e, i) => (
                                <Nav.Link key={i} as={Link} to={e.path}>{e.name}</Nav.Link>
                            ))}
                        </Nav>
                            <Button variant="outline-primary" onClick={handleSearchClick}>Search</Button>
                            <div style={{ position: 'relative', cursor: 'pointer' }}>
                                {/* <i className="bi bi-cart-fill text-primary" style={{ fontSize: '1.5rem', marginLeft: "10px" }} onClick={() => window.location.href = '/cart'}></i> */}
                                <i className="bi bi-cart-fill text-primary" style={{ fontSize: '1.5rem', marginLeft: "10px" }} onClick={handleCartClick}></i>
                                {cartItemCount > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        background: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '0 5px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {cartItemCount}
                                    </span>
                                )}
                            </div>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
